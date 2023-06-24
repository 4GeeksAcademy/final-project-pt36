import React from "react";
import { Cards } from "./cards";


export const AdminDashboard = ({user}) => {
	
	const data = [
		{ img:"",
		title: "Create Muestra",
		 text:"Asignar tareas por usuario", 
		 buttonText: "Create",
		},
		{ img:"",
		title: "Administrar Usuarios",
		 text:"Ve tus usuarios", 
		
		 buttonText: "Administrar",
		},
		{ img:"",
		title: "Ver Muestras realizadas",
		 text:"Ve las muestras realizadas", 
		 buttonText: "Ver",
		},	
			
	]
	return (
		
		
			<secction>
					<p>hola, {user.name}</p>
				<div className="container" >
					<div className="row align-items-cente">
				{
					data.map(({img, title, text, buttonText}, i )=>{
						return (
							<Cards 
							key={i}
							src={img}
							title={title}
							text={text}
							buttonText={buttonText}
							/>
						)
					})}
					</div>

				</div>

			</secction>
				
			
	)
};
