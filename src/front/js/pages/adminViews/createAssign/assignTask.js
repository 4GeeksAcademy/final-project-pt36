import React, { useEffect, useState } from "react";


export const AssignTask = () => {
    
  const [muestras, setMuestras] = useState([])

  const heading= ["Proyecto","id", "area" , "Especie", "imagen", "Calidad", "Ubicacion", "imagen ubicacion" , "Comentarios", "Editar"]


  useEffect(()=>{
    try {
        const getMuestras = async () => {
            const resp = await fetch("https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/muestra")
            const data = await resp.json()
            setMuestras(data)  
          
            };
            getMuestras();
      } catch (error) {
        console.log("error", error);
      };
}, []);
  return (
      <>
      <table class="table">
        <thead>
          <tr>
            {heading.map((head, i) => (
              <th scope="col" key={i}>{head}</th>
            ))
            }
          </tr>
        </thead>
        <tbody>
        {console.log(muestras)}
        {muestras.length !== 0 ? (
              muestras.map(({project_name, id, area, aditional_comments, specimen, image_specimen, quality_specimen, ubication, ubication_image}, i) =>
           
                  <tr key={i}>
                    <td>{project_name}</td>
                    <td>{id}</td>
                    <td>{area}</td>
                    <td>{specimen}</td>
                    <td>{image_specimen}</td>
                    <td>{quality_specimen}</td>
                    <td>{ubication}</td>
                    <td>{aditional_comments}</td>
                    <td>{ubication_image}</td>
                    <td><button className="btn btn-danger">Eliminar Muestra</button></td>
                  </tr>
                )
               
              )
              : (<div></div>)}
      </tbody>
      </table>

    </>
   
  
  )
        }