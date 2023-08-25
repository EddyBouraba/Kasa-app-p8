import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import "../Error/Error.scss"
import Footer from "../../components/Footer/Footer"


function Error () {
    return (
        <div>
            <Banner />
            <div className="MainDiv">
                <div><div className="MainDiv_Four">404</div></div>
                
                <div className="MainDiv_Oups">Oups! La page  que <br className="show"/> vous demandez n'existe pas.</div>
                <Link to="/" style={{
                    marginBottom: "100px",
                    fontSize: "20px"
                }}>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Error