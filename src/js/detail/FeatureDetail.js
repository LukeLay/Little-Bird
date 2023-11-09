import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp, faBookOpen, faBookmark, faBrain, faComment, faDiceFive, faHandFist, faHeart, faHeartPulse, faLightbulb, faPerson, faPersonRunning, faRulerCombined, faShield, faShieldHalved, faShieldHeart, faShieldVirus, faStar, faTableCells } from '@fortawesome/free-solid-svg-icons'
import BackGroundImage from "../components/BackgroundImage";


const FeatureDetail = (props) => {
    const [feature, setFeature] = useState(null);

    let featureIndex = props.match.params.featureName;

    useEffect(() => {

        if (featureIndex != undefined && featureIndex) {

            fetch("public/data/5e-SRD-Features.json")
                .then((response) => response.json())
                .then((data) => {

                    let foundFeature = data.find(obj => obj["index"] == featureIndex);

                    if (foundFeature) {
                        setFeature(foundFeature);
                    }

                    else {
                        console.error("feature not found:", featureIndex);
                    }

                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [featureIndex]);

    const borderStyle = { border: "1px solid var(--bs-secondary)", margin: "4px" };

    const cellStyle = {
        fontSize: "1.2rem",
        color: "var(--bs-light)",
        textAlign: "left",
    };

    const headerStyle = {
        cursor: "pointer",
        fontSize: "1.2rem",
        color: "var(--bs-light)",
        fontWeight: "bold",
        textAlign: "left",
    };

    return (
        <>

            {feature ? (
                <>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/Features">Features</Link></li>
                        <li className="breadcrumb-item active">{feature.index}</li>
                    </ol>

                    <BackGroundImage image="public/img/mordenkainens-tome-of-foes-cover-art.png" />

                    <div style={{ padding: "4%", opacity: "0.95" }}>

                        <div className="card text-white bg-dark mb-3 border-primary" style={{ margin: "8px", opacity: 0.95 }}>

                            <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>{feature.name}</h2>
                            </div>

                            <div className="card-body" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center" }}>

                                <table className="table table-hover" style={{ width: "73%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                    <thead>
                                        <tr>
                                            <th className="table-primary" style={{ textAlign: "left" }}>Attribute</th>
                                            <th className="table-primary" style={{ textAlign: "left" }}>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        <tr className="table-dark"><td style={headerStyle}><b><b>Name</b></b></td><td style={cellStyle}>{feature["name"]}</td></tr>

                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Class</b></td>
                                            <td style={cellStyle}>
                                                {feature["class"] && feature["class"].name
                                                    ? (<Link to={`/Classes/${feature["class"]["index"]}`}>{feature["class"].name}</Link>)
                                                    : (<span style={{ opacity: "0.25" }}><i>none</i></span>)
                                                }
                                            </td>
                                        </tr>

                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Subclass</b></td>
                                            <td style={cellStyle}>
                                                {feature["subclass"] && feature["subclass"].name
                                                    ? (<span>{feature["subclass"].name}</span>)
                                                    : (<span style={{ opacity: "0.25" }}><i>none</i></span>)
                                                }
                                            </td>
                                        </tr>

                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Prerequisites</b></td>
                                            <td style={cellStyle}>
                                                {feature["prerequisites"] && feature["prerequisites"].length > 0
                                                    ? (
                                                        <ul>
                                                            {feature["prerequisites"].map((prerequisite, index) => (
                                                                <li key={index}>
                                                                    {prerequisite["type"] === "spell"
                                                                        ? (`Spell: ${prerequisite["spell"].replace("/api/spells/", "").replaceAll("-", " ")}`)
                                                                        : prerequisite["type"] === "feature"
                                                                            ? (`Feature: ${prerequisite["feature"].replace("/api/features/", "").replaceAll("-", " ")}`)
                                                                            : (`Level: ${prerequisite["level"]}`)
                                                                    }
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )
                                                    : (
                                                        <span style={{ opacity: "0.25" }}><i>none</i></span>
                                                    )}
                                            </td>
                                        </tr>


                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Description</b></td>
                                            <td style={cellStyle}>
                                                {feature["desc"] && feature["desc"].length > 0
                                                    ? (feature["desc"].map((desc, index) => (<span key={index}>•&nbsp;{desc}<br /></span>)))
                                                    : (<span style={{ opacity: "0.25" }}><i>none</i></span>)
                                                }
                                            </td>
                                        </tr>



                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Parent</b></td>
                                            <td style={cellStyle}>
                                                {feature["parent"]
                                                    ? (<Link to={`/Features/${feature["parent"]["index"]}`}>{feature["parent"].name}</Link>)
                                                    : (<span style={{ opacity: "0.25" }}><i>none</i></span>)
                                                }

                                            </td>
                                        </tr>


                                        <tr className="table-dark">
                                            <td style={headerStyle}><b>Feature Specific</b></td>
                                            <td style={cellStyle}>

                                                {feature["feature_specific"]
                                                    && feature["feature_specific"]["invocations"]
                                                    && feature["feature_specific"]["invocations"].length > 0
                                                    ? (
                                                        <>
                                                            {feature["feature_specific"]["invocations"].map((option, index) => (
                                                                <span key={index}>
                                                                    •&nbsp;<Link to={`/Features/${option["index"]}`}>{option["name"]}</Link><br />
                                                                </span>
                                                            ))}
                                                        </>
                                                    )
                                                    : (
                                                        <>
                                                            {feature["feature_specific"]
                                                                ? (
                                                                    <div>
                                                                        Choose {feature["feature_specific"]["subfeature_options"]["choose"]} from: <br />
                                                                        {feature["feature_specific"]["subfeature_options"]["from"]["options"].map((option, index) => (
                                                                            <span key={index}>
                                                                                •&nbsp;<Link to={`/Features/${option["item"]["index"]}`}>{option["item"]["name"]}</Link><br />
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                )
                                                                : (
                                                                    <span style={{ opacity: "0.25" }}><i>none</i></span>
                                                                )}
                                                        </>
                                                    )
                                                }

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>

                </>
            ) : (
                <div>Loading...</div>
            )}

        </>
    );
};

export default withRouter(FeatureDetail);
