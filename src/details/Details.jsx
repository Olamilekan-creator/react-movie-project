import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../assets/sunset-3189813_1280.jpg"

const Details = () => {
    const detailItems = {
    image: image,
    title: 'Sunset Movie'
    description: 'Echo is an American television miniseries created for the streaming service Disney+, based on Marvel Comics featuring the character of the same name.'
}

    return (
<div>
<Header />
<section id="more__details">
    <div className="more__details--row">
        <h2 className="more__details--text">More Details</h2>
        <hr className="hr__line" />
     {detailItems.map((item, index) => (
        <div key={index} className="more__details--container">
        <figure>
            <img src={item.image} alt="Sunset" className="more__details--img" />
        </figure>
        <div className="more__details--description">
            <h3 className="more__text">{item.title}</h3>
            <p className="more__details--para">{item.description}</p>
            <p className="more__details--para">{item.description}</p>
            <p className="more__details--para">{item.description}</p>
        </div>
    </div>
     ))}
    </div>
</section>
<Footer />
</div>
    );
}

export default Details;