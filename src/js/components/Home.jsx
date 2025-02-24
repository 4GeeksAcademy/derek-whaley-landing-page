import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const destinations = [
    {
        image: "https://picsum.photos/id/1015/200/300",
        title: "Beach Paradise",
        description: "Relax by the crystal-clear waters and enjoy stunning sunsets."
    },
    {
        image: "https://picsum.photos/id/1016/200/300",
        title: "Mountain Escape",
        description: "Hike through breathtaking landscapes and discover hidden trails."
    },
    {
        image: "https://picsum.photos/id/1019/200/300",
        title: "City Lights",
        description: "Experience the energy of vibrant city life and amazing cuisine."
    },
    {
        image: "https://picsum.photos/id/1021/200/300",
        title: "Jungle Adventure",
        description: "Explore lush rainforests and encounter exotic wildlife."
    }
];

const Home = () => {
    return (
        <div className="text-center">
            <Navbar />
            <Jumbotron />
            <div className="container">
                <div className="row">
                    {destinations.map((place, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <Card data={place} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
