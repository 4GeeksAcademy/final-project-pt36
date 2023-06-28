import React, { useEffect, useState } from "react";


export const UserGetMuestra = () => {

  const [muestras, setMuestras] = useState([])

    const heading= ["Proyecto","id", "area" , "Especie", "imagen", "Calidad", "Ubicacion", "Comentarios", "Editar"]


    let storageUSer = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{
            try {
                const getMuestras = async () => {
                    const resp = await fetch(`https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/user/${storageUSer.id}/muestras`)
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
                muestras.muestras.map(({project_name, id, area, aditional_comments, specimen, image_specimen, quality_specimen, ubication}, i) =>
             
                    <tr key={i}>
                      <td>{project_name}</td>
                      <td>{id}</td>
                      <td>{area}</td>
                      <td>{specimen}</td>
                      <td>{image_specimen}</td>
                      <td>{quality_specimen}</td>
                      <td>{ubication}</td>
                      <td>{aditional_comments}</td>
                      <td><button className="btn btn-success">Editar</button></td>
                    </tr>
                  )
                 
                )
                : (<div></div>)}
        </tbody>
        </table>

      </>
     
    
    )
    
  }
     

    
       
  