import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashRouter, Link, Route, Switch } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';

import "../style/bootswatch_v5.3/bootstrap-superhero.css";

import StartupLogo from "./components/StartupLogo";
import Applogo from "./components/AppLogo";

import "../style/style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Dice from "./components/Dice";
import Monsters from "./components/Monsters";
import MonsterDetail from "./components/MonsterDetail";
import ClassDetail from "./components/ClassDetail";
import Classes from "./components/Classes";
import NotFound from "./components/NotFound";
import Spells from "./components/Spells";
import SpellDetail from "./components/SpellDetail";
import Reference from "./components/Reference";

export default function App() {    

    //Control the startup animation
    const [launching, setLaunching] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {setLaunching(false);}, 1500);
      return () => {
        clearTimeout(timer);
    };
    }, []);
    

    return (
        <>
            <Toaster toastOptions={{ className: '', style: { padding: '16px', fontSize: '1.5rem' } }}/>

            {launching && <StartupLogo />}
            {!launching && 
                <>
                
                

                    <HashRouter hashType="noslash">

                        <div className="App">

                            <NavBar />

                            <div style={{marginTop: "128px"}}>

                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/Dice" component={Dice}/>
                                <Route exact path="/Monsters" component={Monsters}/>                                 
                                <Route path="/Monsters/:monsterName" component={MonsterDetail} />    
                                <Route exact path="/Classes" component={Classes}/>   
                                <Route exact path="/Classes/:className" component={ClassDetail}/>  
                                <Route exact path="/Spells" component={Spells}/>   
                                <Route exact path="/Spells/:spellName" component={SpellDetail}/>
                                <Route exact path="/Reference" component={Reference} />
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