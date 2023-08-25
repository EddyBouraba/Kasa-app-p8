import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import DropDown from "../../components/About_Components/DropDown/DropDown";
import Avatar from "../../components/Avatar/Avatar";
import Tag from "../../components/tags/Tags";
import Carrousel from "../../components/Carrousel/Carrousel";
import Banner from "../../components/Banner/Banner";
import Rates from "../../components/RateStars/RateStars";
import "../../style/HomeLocation.scss"
import homeList from '../../DB/homeList.json'
import Error from "../Error/Error";
import Footer from "../../components/Footer/Footer"


export default function LocationPage() {

    const [location, setLocation] = useState({tags:[], rating:'', equipments:[], pictures:[], host:{'name':'', 'picture':''}});

    const { id } = useParams();

    useEffect(() => {
        for (let i = 0; i < homeList.length; i++) {
          if (homeList[i].id === id) {
            setLocation(homeList[i]);
            console.log("response ok");
          }
        }
      }, [id]);


    if (location.id === id) {
        return (
            <>
                {<div className="BigContent">
                    <Banner/>
                    <div className="body_location_page">
                        <div className="BigContent_ShowCarrousel">
                            <Carrousel img={location.pictures}/>
                        </div>

                        <div className="BigContent_PartOne">

                            <div className="BigContent_Main">

                                <div className="BigContent_TitleHost">
                                    <div className="BigContent_TitleHost_Text">
                                        <h1 className="BigContent_TitleHost_Titre">{location.title}</h1>
                                        <p className="BigContent_TitleHost_SubTitle">{location.location}</p>
                                    </div>
                                    <div className="BigContent_OwnerPart">
                                        <Avatar name={location.host.name} picture={location.host.picture}/>
                                        <Rates rateNum={location.rating}/>
                                    </div>
                                </div>

                                <div className="BigContent_Tags">
                                    {location.tags.map((tag) => <Tag content={tag} key={tag}/>)}
                                </div>
                            </div>

                        </div>

                        <div className="BigContent_PartTwo">
                            <div className="BigContent_PartTwo_Left">
                                <DropDown
                                    title="Description"
                                    content={location.description}
                                />
                            </div>
                            <div className="BigContent_PartTwo_Right">
                                <DropDown
                                    title="Equipement"
                                    content={
                                        <div>
                                            {location.equipments.map((equipment) => <div
                                                key={equipment}>{equipment}</div>)}
                                        </div>
                                    }
                                />

                            </div>
                        </div>
                        
                    </div>
                </div>

                }               
            <Footer />             
            </>
        );
    } else {
        return (
            <>
                {
                    <Error />


                }
            </>
        );
    }
}