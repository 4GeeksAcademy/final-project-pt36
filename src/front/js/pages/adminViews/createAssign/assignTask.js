import React from "react";

export const AssignTask = () => {

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Delete a Task by Member</p>
                                        <form className="mx-1 mx-md-4">
                                         
                            
                                         
                                            <div className="form-outline flex-fill mb-0">
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Nombre</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <label className="form-label" for="form3Example1c">Miembro del equipo</label>
                                                </div>
                                            <div className="form-outline flex-fill mb-0">
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Tarea</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <label className="form-label" for="form3Example1c">Nombre de la tarea</label>
                                                </div>
                                                
                                         
                                            <div className="d-flex flex-row align-items-center mb-4">
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg">Eliminar</button>
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