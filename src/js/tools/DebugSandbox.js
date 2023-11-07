import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import BackGroundImage from "../components/BackgroundImage";
import AnalyzeLibrary from "./AnalyzeLibrary";
import ReturnToTopButton from "../components/ReturnToTopButton";

const DebugSandbox = () => {
    return (
        <>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Debug</li>
            </ol>

            <BackGroundImage image="public/img/sword-coast-adventurers-guide-cover-art.png" />

                <AnalyzeLibrary src={"Spells"}/>
                <AnalyzeLibrary src={"Omitted-Spells"}/>
                <AnalyzeLibrary src={"Alignments"}/>
                <AnalyzeLibrary src={"Backgrounds"}/>
                <AnalyzeLibrary src={"Classes"}/>
                <AnalyzeLibrary src={"Conditions"}/>
                <AnalyzeLibrary src={"Damage-Types"}/>
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

                <ReturnToTopButton />
        </>
    );
}

export default DebugSandbox;