import React, {useEffect, useState} from "react";
import { Context } from "../../store/appContext";



export const ViewWorkers = () => {
    const [user, setUser] = useState("")


    const heading = ["name", "last Name", "email"] 

    useEffect(()=>{
            try {
                const userRequest = async () => {
                    const resp = await fetch("https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/user")
                    const data = await resp.json()
                    setUser(data.users)  
                    };
                    userRequest();
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
              {user.length !== 0 ? (
                user.map(({name, last_name, email}, i) =>{
                  return (
                    <tr key={i}>
                      <td>{name}</td>
                      <td>{last_name}</td>
                      <td>{email}</td>
                    </tr>
                  )
                }))
                : (<div></div>)}
          </tbody>
        </table>

      </>
     
    
    )
}