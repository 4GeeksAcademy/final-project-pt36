import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { useForm } from "../../../hooks/useform";


export const MakeMuestra = () => {
    const { store, actions } = useContext(Context)
    const [tasks, setTasks] = useState(null);

   

    const [values, handleInputChange] = useForm({
       
        ubication_image:"",
        area:"",
        specimen:"",
        quality_specimen:"",
        image_specimen:"",
        aditional_comments:"",
        proyecto_id: ""

    })

    const [selectedTask, setSelectedTask] = useState(null)

    const selectTask = (taskId) => {
        let newTasks = [...tasks]
        let filteredTask = newTasks.filter((x)=> x.id == taskId)
        setSelectedTask(()=> filteredTask)
    }

    const { user_id, ubication_image, specimen, quality_specimen, image_specimen, aditional_comments, proyecto_id} = values

    let storageUSer = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (tasks === null) {
        try{
            const getTasks = async () =>{
                const res = await fetch(`https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/user/${storageUSer.id}/projects`)
                const data = await res.json();
                setTasks(data)
                
            };
            getTasks()
        }
        catch(error){
            console.log("error", error)
        }
    };

    }, [tasks])

    const createSampleRequest = async () => {
        try {
            await fetch(
              "https://manolos05-ideal-xylophone-7q55p7xj9jgcp9g6-3001.preview.app.github.dev/muestra",
              {
                method: "POST",
                body: JSON.stringify({
                    user_id: `${storageUSer.id}`,
                    proyecto_id: `${selectedTask[0].id}`,
                    project_name:`${selectedTask[0].name}`,
                    ubication:`${selectedTask[0].direction}`,
                    area:"",
                    ubication_image:"",
                    specimen:"",
                    quality_specimen:"",
                    image_specimen:"",
                    aditional_comments:"",

                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
          } catch (error) {
            console.log("error", error);
          };
        }
{console.log(selectedTask)}
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
                                        {tasks !== null && 
                                        <form className="mx-1 mx-md-4">
                                        <select onChange={(e)=>{handleInputChange(e); selectTask(e.target.value) }} name="proyecto_id" className="form-select" aria-label="Default select example">
                                            <option defaultValue>Seleccionar Proyecto</option>
                                            {
                                                tasks.map((task, i) => {
                                                    return (
                                                        <option value={task.id} key={i}>{task.name}</option>
                                                    )                                                  
                                                })                                        
                                            }        
                                        </select>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">ubication</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">ubication</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">user_id</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">ubication_image</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">area</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">specimen</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">quality_specimen</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">image_specimen</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="textarea" id="form3Example1c" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example1c">aditional_comments</label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                        </div>
                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button" onClick={()=>createSampleRequest()} className="btn btn-primary btn-lg">Create</button>
                                        </div>
                                    </form>
                                        }
                                        
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