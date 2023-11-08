import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashRouter, Link, Route, Switch } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';

import "../style/bootswatch_v5.3/bootstrap-superhero.css";

import StartupLogo from "./components/StartupLogo";
import Applogo from "./components/AppLogo";

import "../style/style.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Dice from "./pages/Dice";
import Monsters from "./pages/Monsters";
import MonsterDetail from "./detail/MonsterDetail";
import ClassDetail from "./detail/ClassDetail";
import Classes from "./pages/Classes";
import NotFound from "./components/NotFound";
import Spells from "./pages/Spells";
import SpellDetail from "./detail/SpellDetail";
import Reference from "./pages/Reference";
import Races from "./pages/Races";
import RaceDetail from "./detail/RaceDetail";
import Backgrounds from "./pages/Backgrounds";
import MagicItems from "./pages/MagicItems";
import MagicItemDetail from "./detail/MagicItemDetail";
import DebugSandbox from "./tools/DebugSandbox";
import Features from "./pages/Features";
import FeatureDetail from "./detail/FeatureDetail";

//electron-packager "$(node -e "const path = require('path'); console.log(path.join(process.env.USERPROFILE, 'Documents', 'GitHub', '[YOUR_APP_NAME_HERE]'))")" [YOUR_APP_NAME_HERE] --platform=win32 --arch=x64 --electron-version=26.1.0 --overwrite
export default function App() {

    //Control the startup animation
    const [launching, setLaunching] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => { setLaunching(false); }, 1500);
        return () => {
            clearTimeout(timer);
        };
    }, []);


    return (
        <>
            <Toaster
                toastOptions={{
                    className: 'custom-toast',
                    position: "top-center", // Set the position
                    reverseOrder: false, // Set reverseOrder
                    icon: <Applogo w={84} h={84} flipped={true} animate={true} />, // Use your custom component as the icon
                    style: {
                        padding: '8px',
                        fontSize: '20px',
                        backgroundColor: "var(--bs-secondary)",
                        color: "var(--bs-light)",
                        minWidth: '50vw',
                        border: "2px solid var(--bs-primary)",
                    },
                    duration: 8000,
                }}
            />



            {launching && <StartupLogo />}
            {!launching &&
                <>



                    <HashRouter hashType="noslash">

                        <div className="App">

                            <NavBar />

                            <div style={{ marginTop: "128px" }}>

                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/Dice" component={Dice} />
                                    <Route exact path="/Monsters" component={Monsters} />
                                    <Route path="/Monsters/:monsterName" component={MonsterDetail} />
                                    <Route exact path="/Classes" component={Classes} />
                                    <Route exact path="/Classes/:className" component={ClassDetail} />
                                    <Route exact path="/Spells" component={Spells} />
                                    <Route exact path="/Spells/:spellName" component={SpellDetail} />
                                    <Route exact path="/Reference" component={Reference} />
                                    <Route exact path="/Races" component={Races} />
                                    <Route exact path="/Races/:raceName" component={RaceDetail} />
                                    <Route exact path="/Backgrounds" component={Backgrounds} />

                                    <Route exact path="/MagicItems" component={MagicItems} />
                                    <Route exact path="/MagicItems/:magicItemName" component={MagicItemDetail} />

                                    <Route exact path="/Features" component={Features} />
                                    <Route exact path="/Features/:featureName" component={FeatureDetail} />


                                    <Route exact path="/DebugSandbox" component={DebugSandbox} />
                                    <Route path="*" component={NotFound} />
                                </Switch>

                            </div>

                        </div>

                    </HashRouter>

                </>
            }

        </>
    );
}




//Light
//import "../style/bootswatch_v5.3/bootstrap-cerulean.css";
//import "../style/bootswatch_v5.3/bootstrap-cosmo.css";
//import "../style/bootswatch_v5.3/bootstrap-default.css";
//import "../style/bootswatch_v5.3/bootstrap-flatly.css";
//import "../style/bootswatch_v5.3/bootstrap-litera.css";
//import "../style/bootswatch_v5.3/bootstrap-lumen.css";
//import "../style/bootswatch_v5.3/bootstrap-sandstone.css";
//import "../style/bootswatch_v5.3/bootstrap-spacelab.css";
//import "../style/bootswatch_v5.3/bootstrap-united.css";
//import "../style/bootswatch_v5.3/bootstrap-yeti.css";
//import "../style/bootswatch_v5.3/bootstrap-zephyr.css";

//Dark
//import "../style/bootswatch_v5.3/bootstrap-cyborg.css";
//import "../style/bootswatch_v5.3/bootstrap-darkly.css";
//import "../style/bootswatch_v5.3/bootstrap-slate.css";
//import "../style/bootswatch_v5.3/bootstrap-solar.css";

//Fem
//import "../style/bootswatch_v5.3/bootstrap-journal.css";
//import "../style/bootswatch_v5.3/bootstrap-minty.css";
//import "../style/bootswatch_v5.3/bootstrap-pulse.css";

//Minified
//import "../style/bootswatch_v5.3/bootstrap-materia.css";
//import "../style/bootswatch_v5.3/bootstrap-simplex.css";


//Novelty
//import "../style/bootswatch_v5.3/bootstrap-lux.css";
//import "../style/bootswatch_v5.3/bootstrap-morph.css";
//import "../style/bootswatch_v5.3/bootstrap-quartz.css";
//import "../style/bootswatch_v5.3/bootstrap-sketchy.css";