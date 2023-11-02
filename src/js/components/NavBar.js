import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20, faDragon, faBook, faHatWizard, faUser, faSquareRootVariable, faBriefcase, faChartSimple, faKitchenSet, faClockRotateLeft, faMagnifyingGlass, faCircleNodes, faWandSparkles } from '@fortawesome/free-solid-svg-icons'


import Applogo from "./AppLogo";

const navButtonStyle = {

    width: "104px",
    height: "84px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    margin: "4px",
    color: "var(--bs-white)"
};


const NavBar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{
                padding: "4px",
                border: "2px solid var(--bs-primary)",
                // borderRadius: "16px",
                //margin: "1%",
                position: "fixed", // Fix the navigation bar at the top
                top: "0", // Stick it to the top
                width: "100%", // Occupy full width
                zIndex: "999", // Ensure it's on top of other content
                background: "rgba(0, 0, 0, 0.7)", // Apply a transparent background
                opacity: "0.95",
            }}>

                <div className="container-fluid" style={{ opacity: "95%" }} >

                    {/* <div onClick={() => {window.location.reload()}} className="navbar-brand" href="#"><Applogo w={84} h={84} /></div> */}
                    <Link className="navbar-brand" to="/"><Applogo w={84} h={84} /></Link>

                    <div className="collapse navbar-collapse" id="navbarColor01" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <ul className="navbar-nav me-auto" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

                            <li className="nav-item navButton">
                                <Link className="nav-link" to="/Dice" style={navButtonStyle}>
                                    <FontAwesomeIcon icon={faDiceD20} size="2x" color="" />
                                    Dice
                                </Link>
                            </li>

                            <li className="nav-item navButton">
                                <Link className="nav-link" to="/Monsters" style={navButtonStyle}>
                                    <FontAwesomeIcon icon={faDragon} size="2x" color="" />
                                    Monsters
                                </Link>
                            </li>

                            <li className="nav-item navButton">
                                <Link className="nav-link" to="/Spells" style={navButtonStyle}>
                                    <FontAwesomeIcon icon={faHatWizard} size="2x" color="" />
                                    Spells
                                </Link>
                            </li>

                            <li className="nav-item navButton">
                                <Link className="nav-link" to="/MagicItems" style={navButtonStyle}>
                                    <FontAwesomeIcon icon={faWandSparkles} size="2x" color="" />
                                    Magic Items
                                </Link>
                            </li>

                            <li className="nav-item navButton">
                                <Link className="nav-link" to="/Classes" style={navButtonStyle}>
                                    <FontAwesomeIcon icon={faBook} size="2x" color="" />
                                    Classes
                                </Link>
                            </li>

                            <li className="nav-item navButton">
                                <Link className="nav-link" to="/Races" style={navButtonStyle}>
                                    <FontAwesomeIcon icon={faUser} size="2x" color="" />
                                    Races
                                </Link>
                            </li>

                            {/* <li className="nav-item navButton">
                            <Link className="nav-link" to="/Backgrounds" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faClockRotateLeft} size="2x" color=""/>
                                Backgrounds
                            </Link>
                        </li> */}

                            <li className="nav-item navButton">
                                <Link className="nav-link" to="/" style={navButtonStyle}>
                                    <FontAwesomeIcon icon={faChartSimple} size="2x" color="" />
                                    Abilities
                                </Link>
                            </li>

                            <li className="nav-item navButton">
                                <Link className="nav-link" to="/" style={navButtonStyle}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color="" />
                                    Features
                                </Link>
                            </li>

                            {/* <li className="nav-item navButton">
                            <Link className="nav-link" to="/" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faKitchenSet} size="2x" color=""/>
                                Skills
                            </Link>
                        </li> */}



                            <li className="nav-item navButton">
                                <Link className="nav-link" to="/Reference" style={navButtonStyle}>
                                    <FontAwesomeIcon icon={faSquareRootVariable} size="2x" color="" />
                                    Reference
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

        </>
    );
}

export default NavBar;