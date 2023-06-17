"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Muestra
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
import jwt

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['JWT_SECRET_KEY']= 'secretkey'

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

#Function to encode a token
def encode_auth_token(user_id):
    try:
        payload ={
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
            'iat': datetime.datetime.utcnow(),
            'sub': user_id
        }
        return jwt.encode(payload, app.config['JWT_SECRET_KEY'], algorithm='HS256')
    except Exception as e:
        return e

#Function to decode a token
def decode_auth_token(auth_token):
    try:
        payload = jwt.decode(payload, app.config['JWT_SECRET_KEY'], algorithm='HS256')
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Token expired. Please log again'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log again'

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

@app.route('/user', methods=['GET'])
def handle_hello():
    users = User.query.all()
    result = []
    for user in users:
        result.append({
            "id": user.id,
            "name": user.name,
            "last_name": user.last_name,
            "rut": user.rut,
            "email": user.email,
            "rol": user.rol,
        })
    return jsonify(result)

@app.route('/muestra', methods=['GET'])
def get_muestra():
    muestras = Muestra.query.all()    
    result = list(map(lambda muestr:muestr.serialize(),muestras))
    return jsonify(result)


@app.route('/signup', methods=['POST'])
def create_user():
    data = request.json

    user = User.query.filter_by(email=data['email']).first()
    if user:
       return jsonify(message= 'user alredy exist'), 400
   
    hashed_password = generate_password_hash(data['password'], method='sha256')

    new_user = User(
        name=data['name'],
        last_name=data['last_name'],
        rut=data['rut'],
        email=data['email'],
        rol=data['rol'],
        password=hashed_password
    )

    db.session.add(new_user)
    db.session.commit()
    
    aut_token = encode_auth_token(new_user.id)

    return jsonify(aut_token = aut_token)

@app.route('/login', methods=['POST'])
def handle_login():

   data = request.get_json()

   user = User.query.filter_by(email=data['email']).first()
   if not user:
       return jsonify(message= 'user not found'), 400
   
   if check_password_hash(user.password, data['password']):
       auth_token = encode_auth_token(user.id)
       return jsonify(auth_token=auth_token)
   else:
       return jsonify(message='Wrong credentials'), 401


@app.route('/muestra', methods=['POST'])
def create_muestra():
    data = request.json

    muestra = Muestra(
        project_name=data['project_name'],
        ubication=data['ubication'],
        ubication_image=data['ubication_image'],
        area=data['area'],
        specimen=data['specimen'],
        quality_specimen=data['quality_specimen'],
        image_specimen=data['image_specimen'],
        aditional_coments=data['aditional_coments']
    )

    db.session.add(muestra)
    db.session.commit()

    return jsonify({'message': 'Muestra  creada correctamente'})



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
