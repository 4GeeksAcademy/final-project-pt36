import React, {useContext, useEffect, useState} from "react";
import { Context } from "../../store/appContext";


export const ViewWorkers = () => {
    const { store, actions } = useContext(Context)
   
    const heading = ["name", "last Name", "email"] 

    useEffect(()=>{
      actions.loadUser()
     }, []);

    return (
        <>
        <table className="table">
          <thead>
            <tr>
              {heading.map((head, i) => (
                <th scope="col" key={i}>{head}</th>
              ))
              }
            </tr>
          </thead>
          <tbody>
              {(
                store.users.map(({name, last_name, email}, i) =>{
                  return (
                    <tr key={i}>
                      <td>{name}</td>
                      <td>{last_name}</td>
                      <td>{email}</td>
                      <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                  )
                }))
                }
          </tbody>
        </table>

      </>
     
    
    )
}