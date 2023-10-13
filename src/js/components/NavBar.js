import React from "react";
import {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceD20, faDragon, faBook, faHatWizard, faUser, faSquareRootVariable, faBriefcase, faChartSimple, faKitchenSet, faClockRotateLeft, faMagnifyingGlass, faCircleNodes } from '@fortawesome/free-solid-svg-icons'


import Applogo from "./AppLogo";

const navButtonStyle = {

    width: "84px",
    height: "84px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "4px",

}


const NavBar = () => {
    return ( 
        <>

            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{padding: "4px", height: "96px", border: "2px solid var(--bs-primary)", borderRadius: "16px", margin: "8px"}}>

                <div className="container-fluid" >

                    {/* <div onClick={() => {window.location.reload()}} className="navbar-brand" href="#"><Applogo w={84} h={84} /></div> */}
                    <Link className="navbar-brand" to="/"><Applogo w={84} h={84} /></Link>

                    <div className="collapse navbar-collapse" id="navbarColor01" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                    <ul className="navbar-nav me-auto" style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/Dice" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faDiceD20} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Dice</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/Monsters" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faDragon} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Monsters</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faBook} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Classes</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faUser} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Races</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faClockRotateLeft} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Backgrounds</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faChartSimple} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Abilities</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Features</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faKitchenSet} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Skills</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faHatWizard} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Spells</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faBriefcase} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Items</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" style={navButtonStyle}>
                                <FontAwesomeIcon icon={faSquareRootVariable} size="2x" color=""/>
                                <span style={{color: "var(--bs-info)"}}>Formulas</span>
                            </a>
                        </li>

                    </ul>

                    </div>

                </div>

            </nav>        

        </> 
    );
}
 
export default NavBar;