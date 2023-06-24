import React from "react";


export const UserDashboard = ({user}) => {

    const data = [
		{ 
        img:"",
		title: "Relizar Muestras",
		text:"Cumple con las muestras asignadas.", 
		buttonText: "Realizar",
		},
		{ 
        img:"",
        title: "Ver muestras",
		text: "Edita y ve tus muestras",
		 buttonText: "Ver",
		},	
		{ 
        img:"",
		title: "Tareas Pendientes",
		text:"Completa tus muestras", 
		buttonText: "Completar",
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

}