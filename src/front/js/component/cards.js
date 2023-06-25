import React from "react";
import { Link } from "react-router-dom";


export const Cards = ({img, title, text, url, buttonText}) => {
    

    return (
       
        <div className="col-12 col-xl-4">
        <div className="card m-2">
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}.</p>
                <Link to={url}>
                    <button className="btn btn-primary">{buttonText}</button>
                </Link>
            </div>
        </div>
        </div>

      
    )
}