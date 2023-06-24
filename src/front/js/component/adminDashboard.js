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
		
		
			<div>
					<p>hola, {user.name}</p>
				<div className="container" >
					<div className="row align-items-center">
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
