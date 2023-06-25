import React from "react";

export const CreateProject = () => {

    return (
        <section className="vh-100" style={{backgroundColor: "#eee"}}>
                <section className="vh-100" style={{backgroundColor: "#eee"}}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: "25px"}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create a New Project</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text"  id="form3Example1c" className="form-control" />
                                                        <label className="form-label" for="form3Example1c">Project Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                   
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text"  id="form3Example1c" className="form-control" />
                                                        <label className="form-label" for="form3Example1c">Ubication</label>
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
            </section>
    )
}