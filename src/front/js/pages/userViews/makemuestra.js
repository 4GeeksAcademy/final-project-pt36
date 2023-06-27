import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { useForm } from "../../../hooks/useform";


export const MakeMuestra = () => {
    const { store, actions } = useContext(Context)
    const [task, setTask] = useState([]);
    const [values, handleInputChange] = useForm({
        user_id:"",
        proyecto:"",
        project_name:"",
        ubication:"",
        ubication_image:"",
        area:"",
        specimen:"",
        quality_specimen:"",
        image_specimen:"",
        aditional_comments:""
    })


    useEffect(() => {
        let storageUSer = JSON.parse(localStorage.getItem("user"));
        try{
            const getTask = async () =>{
                const res = await fetch(`https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/user/${storageUSer.id}/projects`)
                const data = await res.json();
                setTask(data)
            };
            getTask()
        }
        catch(error){
            console.log("error", error)
        }
        actions.postSample(); 
    }, [])
   

    return (

        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{ borderRadius: "25px" }}>
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create una nueva muestra</p>
                                    <form className="mx-1 mx-md-4">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text"  id="form3Example1c" className="form-control"  />
                                                <label className="form-label" for="form3Example1c">Project Name</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">

                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control"  />
                                                <label className="form-label" for="form3Example1c">Ubication</label>
                                            </div>
                                            
                                        </div>
                                    <div className="d-flex flex-row align-items-center mb-4">

                                        <div className="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" className="form-control" />
                                            <label className="form-label" for="form3Example1c">Usuario</label>
                                        </div>

                                    </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                        </div>
                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button" className="btn btn-primary btn-lg">Create</button>
                                        </div>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      

    )
}