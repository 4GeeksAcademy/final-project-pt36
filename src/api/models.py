from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    rut = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    rol =  db.Column(db.String(20), unique=False, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "rut": self.rut,
            "email": self.email,
            "rol": self.rol,
            "password": self.password
            # do not serialize the password, its a security breach
        }
    
class Muestra(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(150), unique=False, nullable=False)
    ubication = db.Column(db.String(120), unique=False, nullable=False)
    ubication_image = db.Column(db.String(120), unique=False, nullable=False)
    area = db.Column(db.String(80), unique=False, nullable=False)
    specimen = db.Column(db.String(80), unique=False, nullable=False)
    quality_specimen = db.Column(db.String(80), unique=False, nullable=False)
    image_specimen= db.Column(db.String(80), unique=False, nullable=False)
    aditional_coments = db.Column(db.String(80), unique=False, nullable=False)

    def serialize(self):
        return {
            "id" : self.id,
            "project_name": self.project_name,
            "ubication": self.ubication,
            "ubication_image": self.ubication_image,
            "area": self.area,
            "specimen": self.specimen,
            "quality_specimen": self.quality_specimen,
            "image_specimen": self.image_specimen,
            "aditional_coments": self.aditional_coments
    }
