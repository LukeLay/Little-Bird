import React from "react";
import {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AnalyzeLibrary from "../tools/AnalyzeLibrary";

import toast, { Toaster } from 'react-hot-toast';


const Home = () => {       

    return (
        <> 
            <div className="" style={{display: "flex", flexDirection: "column", padding: "16px"}}>
                
                <AnalyzeLibrary src={"Alignments"}/>
                <AnalyzeLibrary src={"Backgrounds"}/>
                <AnalyzeLibrary src={"Classes"}/>
                <AnalyzeLibrary src={"Conditions"}/>
                <AnalyzeLibrary src={"DamageTypes"}/>
                <AnalyzeLibrary src={"Equipment-Categories"}/>
                <AnalyzeLibrary src={"Equipment"} />
                <AnalyzeLibrary src={"Feats"}/>
                <AnalyzeLibrary src={"Features"}/>
                <AnalyzeLibrary src={"Languages"}/>
                <AnalyzeLibrary src={"Levels"}/>
                <AnalyzeLibrary src={"Magic-Items"}/>
                <AnalyzeLibrary src={"Magic-Schools"}/>
                <AnalyzeLibrary src={"Monsters"}/>
                <AnalyzeLibrary src={"Proficiencies"}/>
                <AnalyzeLibrary src={"Races"}/>
                <AnalyzeLibrary src={"Rule-Sections"}/>
                <AnalyzeLibrary src={"Rules"}/>
                <AnalyzeLibrary src={"Skills"}/>
                <AnalyzeLibrary src={"Spells"}/>
                <AnalyzeLibrary src={"Subclasses"}/>
                <AnalyzeLibrary src={"Subraces"}/>
                <AnalyzeLibrary src={"Traits"}/>
                <AnalyzeLibrary src={"Weapon-Properties"}/>

            </div>

        </>
    );
    
};

export default Home;