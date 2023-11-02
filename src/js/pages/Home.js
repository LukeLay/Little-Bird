import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AnalyzeLibrary from "../tools/AnalyzeLibrary";

import toast, { Toaster } from 'react-hot-toast';
import ReturnToTopButton from "../components/ReturnToTopButton";


const Home = () => {

    const [sections, setSections] = useState([]);

    useEffect(() => {
        // Fetch data from JSON file
        fetch("public/data/5e-SRD-Rule-Sections.json")
            .then((response) => response.json())
            .then((data) => {
                setSections(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>

            <img
                src="public/img/xanathars-guide-to-everything-cover-art.png"
                alt="public/img/xanathars-guide-to-everything-cover-art.png"
                style={{
                    position: "fixed",
                    top: "50%",       // Vertically center the image
                    left: "50%",      // Horizontally center the image
                    transform: "translate(-50%, -50%)", // Center it perfectly
                    zIndex: "-1",
                    opacity: "1",
                }}
            />

            <AnalyzeLibrary src={"Magic-Items"} />

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "1%", opacity: "0.95" }}>

                <div className="card text-white bg-dark mb-3 border-primary" style={{ margin: "1%", width: "73%", opacity: 0.95 }}>

                    <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>Rules</h2>
                    </div>

                    <div className="card-body" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                        <div className="accordion" id="accordionExample" style={{ width: "98%", margin: "1%" }}>
                            {sections
                                ? (
                                    sections.map((section, index) => (
                                        <div key={index} className="accordion-item">
                                            <h2 className="accordion-header" id={`heading-${index}`}>
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse-${index}`}
                                                    aria-expanded={index === 0 ? "true" : "false"}
                                                    aria-controls={`collapse-${index}`}
                                                    style={{ marginTop: "2%", color: "var(--bs-dark)", fontSize: "18px", backgroundColor: "var(--bs-primary)" }}
                                                >
                                                    {index + 1}. {section["name"]}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse-${index}`}
                                                className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                                                aria-labelledby={`heading-${index}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <div className="card-text">
                                                        {section["desc"].split('\n\n').map((part, i) => (
                                                            part.startsWith("#") ? (
                                                                <h3 key={i} style={{ marginLeft: "0%", color: "var(--bs-primary)" }}>{part.replaceAll("#", "")}</h3>
                                                            ) : (
                                                                <p key={i} style={{ marginLeft: "1%" }}>
                                                                    <span
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: part
                                                                                .replaceAll("#", "")
                                                                                .replace(/\*\*(.*?)\*\*/g, (match, word) => (
                                                                                    `<span style="text-decoration: underline; font-weight: bold">${word}</span>`
                                                                                )),
                                                                        }}
                                                                    />
                                                                </p>
                                                            )
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )
                                : (
                                    <>Loading...</>
                                )}
                        </div>

                    </div>
                </div>



            </div>

            {/* <AnalyzeLibrary src={"Alignments"}/>
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
                <AnalyzeLibrary src={"Weapon-Properties"}/> */}

            <ReturnToTopButton />
        </>
    );

};

export default Home;