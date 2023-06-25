import React from "react";
import { Cards } from "./cards";



export const AdminDashboard = ({user}) => {
	
	const data = [
		{ img:"",
		title: "Create Muestra",
		 text:"Asignar tareas por usuario", 
		 buttonText: "Create",
		 url: "/dashboard/create"
		},
		{ img:"",
		title: "Administrar Usuarios",
		 text:"Ve tus usuarios", 
		 buttonText: "Administrar",
		 url: "/dashboard/workers"
		},
		{ img:"",
		title: "Ver Muestras realizadas",
		 text:"Ve las muestras realizadas", 
		 buttonText: "Ver",
		 url: "/dashboard/viewmuestras"
		},	
			
	]

	return (
		
		
			<div className="container">
				<div>
					<p>hola, {user.name}</p>
				</div>
				<div  >
					<div className="row p-4 d-flex justify-content-center text-center">
				{
					data.map(({img, title, text, buttonText, url}, i )=>{
						return (
							<Cards 
							key={i}
							src={img}
							title={title}
							text={text}
							url={url}
							
							buttonText={buttonText}
							/>
						)
					})}
					</div>

				</div>

			</div>
				
			
	)
};
