import React from "react";
import {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Die from "../tools/Die";

const DiceGroup = (props) => {

    return (
        <>
            <div className="card border-primary mb-3" style={{width: "48%", margin: "0.5%", display: "flex", flexDirection: "column", padding: "16px"}}>
                <div className="card-header">D{props.sides}</div>
                <div className="card-body" style={{display: "flex", flexDirection: "row", padding: "16px", justifyContent: "space-evenly"}}> 
                    <Die sides={props.sides} />
                    <Die sides={props.sides} />
                    <Die sides={props.sides} />
                    <Die sides={props.sides} />
                    <Die sides={props.sides} />
                    <Die sides={props.sides} />
                </div>
            </div>
        </>
    );
}

const Dice = () => {
    return ( 
        <>

            <img
                src="public/img/dungeon-master-guide-cover-art.png"
                alt="public/img/dungeon-master-guide-cover-art.png"
                style={{
                    position: "fixed",
                    top: "50%",       // Vertically center the image
                    left: "50%",      // Horizontally center the image
                    transform: "translate(-50%, -50%)", // Center it perfectly
                    zIndex: "-1",
                    opacity: "1",
                }}
            />

            <div style={{padding: "1%", opacity: "0.95"}}>

                <button className="btn btn-primary" onClick={() => {window.location.reload()}} style={{height: "36px", width: "auto", margin: "1%"}}>Clear All</button>

                <div style={{display: "flex", flexDirection: "row"}}> 
                    <DiceGroup sides="20" />
                    <DiceGroup sides="4" />
                </div>

                <div style={{display: "flex", flexDirection: "row"}}> 
                    <DiceGroup sides="6" />
                    <DiceGroup sides="8" />
                </div>

                <div style={{display: "flex", flexDirection: "row"}}> 
                    <DiceGroup sides="10" />
                    <DiceGroup sides="12" />
                </div>

                <div style={{display: "flex", flexDirection: "row"}}> 
                    <DiceGroup sides="2" />
                    <DiceGroup sides="100" />
                </div>


            </div>

        </>

     );
}
 
export default Dice;