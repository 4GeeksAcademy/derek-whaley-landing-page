import React from "react";

const Card = ({ data }) => {
    return (
        <div className="card h-100">
            <img src={data.image} className="card-img-top" alt={data.title} style={{ height: "200px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <button className="btn btn-success">Learn More</button>
            </div>
        </div>
    );
};

export default Card;
