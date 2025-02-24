import React from "react";

const Jumbotron = () => {
    return (
        <div className="container my-5">
            <div className="p-5 text-white bg-primary rounded">
                <h1 className="display-4">Discover Your Next Adventure</h1>
                <p className="lead">
                    Explore breathtaking locations, plan your perfect trip, and make unforgettable memories.
                </p>
                <button className="btn btn-light btn-lg">Start Planning</button>
            </div>
        </div>
    );
};

export default Jumbotron;
