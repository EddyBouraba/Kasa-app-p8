import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './A-propos/APropos';
import Error from './Error/Error';
import LocationPage from './Fiche-logement/FicheLogement';
import Home from './Home/Home';


function RouterApp() {
    return (
        <BrowserRouter>
                {/* enveloper le composant Route dans le parent composant Routes pour la new version react */}
                <Routes>
                    <Route path= {"/home"}  exact={true} element={<Home title="Home" />} />
                    <Route path= {"/about"} exact={true} element={<About title="About"  />} />
                    <Route path= {"/"}  exact={true} element={<Home />} />
                    <Route path= {"*"} element={<Error />} />
                    <Route path= {"/locations/:id/*"} exact={true}  element={<LocationPage />} />
                </Routes>
        </BrowserRouter>
    );
}

export default RouterApp