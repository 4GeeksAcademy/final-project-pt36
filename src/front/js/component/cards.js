import React from "react";
import { Link } from "react-router-dom";


export const Cards = ({img, title, text, url, buttonText}) => {
    

    return (
        <div className="card col-4  m-2" style={{width: "30%"}}>
            <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}.</p>
            <Link to={url}>
            <button className="btn btn-primary">{buttonText}</button>
            </Link>
        </div>
        </div>
    )
}