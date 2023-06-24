import React from "react";


export const Cards = ({img, title, text, onClick, buttonText}) => {

    return (
        <div className="card col-4  m-2" style={{width: "30%"}}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}.</p>
            <a href="#" className="btn btn-primary" onClick={onClick}>{buttonText}</a>
        </div>
        </div>
    )
}