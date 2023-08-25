import React, {useEffect} from 'react';
import Dropdown from "../../components/About_Components/DropDown/DropDown";
import "../../pages/A-propos/APropos.scss"
import Banner from '../../components/Banner/Banner';
import {stockData} from "../../components/About_Components/AboutText/AboutText";
import Footer from "../../components/Footer/Footer";

function About() {

    useEffect(() => {
        document.title = `KASA / About`
    })

    return (
        <div>
            <div className="BigContent">
                <div>
                    <Banner />
                </div>
                <div className="MainDivImg">
                    <div className="ClimbTwo"></div>
                </div>
                {}
                <div >
                    {/*utilisation de map pour afficher les elements recuperer dans le fichier json créer
                via la const stockdata*/}
                    {stockData.map((data, key) => {
                        return (
                            <div key={key} className="center">
                                {/*ajout de key pour éviter les problèmes re render et fix issue dans la console*/}
                                <div  className="MainDivAbout" >
                                    <div  className="MainDivAbout_MainContainer">
                                        <div className="MainDivAbout_DropdownContainer"  >
                                            <Dropdown
                                                title="Fiabilité"
                                                content={data.fiabilite}
                                            />
                                        </div>
                                        <div className="MainDivAbout_DropdownContainer" >
                                            <Dropdown
                                                title="Respect"
                                                content={data.respect}
                                            />
                                        </div>
                                        <div className="MainDivAbout_DropdownContainer" >
                                            <Dropdown
                                                title="Service"
                                                content={data.service}
                                            />
                                        </div>
                                        <div className="MainDivAbout_DropdownContainer">
                                            <Dropdown
                                                title="Sécurité"
                                                content={data.securite}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> 
           <Footer />                          
        </div>

    );
}

export default About;