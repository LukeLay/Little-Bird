import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Die from "../components/Die";
import MultiDice from "../components/MultiDice";

const DiceGroup = (props) => {

    let averageValue = (parseInt(props.sides) + 1) / 2 + 0.5;

    return (
        <>
            <div className="card border-primary mb-3" style={{ width: "48%", margin: "1%", display: "flex", flexDirection: "column", borderRadius: "16px" }}>
                <div className="card-header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>D{props.sides} <span style={{ opacity: "0.25" }}>Avg Val: {averageValue}</span></div>
                <div className="card-body" style={{ display: "flex", flexDirection: "column", padding: "16px", justifyContent: "space-evenly" }}>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <Die sides={props.sides} />
                        <Die sides={props.sides} />
                        <Die sides={props.sides} />
                        <Die sides={props.sides} />
                        <Die sides={props.sides} />
                        <Die sides={props.sides} />

                    </div>

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

            <div style={{ padding: "1%", opacity: "0.95" }}>

                <button className="btn btn-danger" onClick={() => { window.location.reload() }} style={{ height: "36px", width: "auto", margin: "1%" }}>Reset</button>

                <MultiDice />

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <DiceGroup sides="20" />
                    <DiceGroup sides="4" />
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <DiceGroup sides="6" />
                    <DiceGroup sides="8" />
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <DiceGroup sides="10" />
                    <DiceGroup sides="12" />
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <DiceGroup sides="2" />
                    <DiceGroup sides="100" />
                </div>


            </div>

        </>

    );
}

export default Dice;