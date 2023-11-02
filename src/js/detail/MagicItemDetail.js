import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp, faBookOpen, faBookmark, faBrain, faComment, faDiceFive, faHandFist, faHeart, faHeartPulse, faLightbulb, faPerson, faPersonRunning, faRulerCombined, faShield, faShieldHalved, faShieldHeart, faShieldVirus, faStar, faTableCells } from '@fortawesome/free-solid-svg-icons'
import BackGroundImage from "../components/BackgroundImage";


const MagicItemDetail = (props) => {
    const [magicItem, setMagicItem] = useState(null);

    let magicItemIndex = props.match.params.magicItemName;

    useEffect(() => {

        if (magicItemIndex != undefined && magicItemIndex) {

            fetch("public/data/5e-SRD-Magic-Items.json")
                .then((response) => response.json())
                .then((data) => {

                    let foundMagicItem = data.find(obj => obj["index"] == magicItemIndex);

                    if (foundMagicItem) {
                        setMagicItem(foundMagicItem);
                    }

                    else {
                        console.error("magicItem not found:", magicItemIndex);
                    }

                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [magicItemIndex]);

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

            {magicItem ? (
                <>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/MagicItems">MagicItems</Link></li>
                        <li className="breadcrumb-item active">{magicItem.index}</li>
                    </ol>

                    <BackGroundImage image="public/img/strixhaven-curriculum-of-chaos-cover-art.png" />

                    <div style={{ padding: "4%", opacity: "0.95" }}>

                        <div className="card text-white bg-dark mb-3 border-primary" style={{ margin: "8px", opacity: 0.95 }}>

                            <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>{magicItem.name}</h2>
                            </div>

                            <div className="card-body" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center" }}>

                                <div style={{ width: "73%", margin: "1%" }}>

                                    <table className="table table-hover" style={{ width: "98%", margin: "1%", border: "1px solid var(--bs-primary)", borderRadius: "16px" }}>
                                        <thead>
                                            <tr>
                                                <th className="table-primary" style={{ textAlign: "left" }}>Attribute</th>
                                                <th className="table-primary" style={{ textAlign: "left" }}>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-dark"><td style={headerStyle}><b><b>Category</b></b></td><td style={cellStyle}>{magicItem["equipment_category"]["name"]}</td></tr>
                                            <tr className="table-dark"><td style={headerStyle}><b>Rarity</b></td><td style={cellStyle}>{magicItem["rarity"]["name"]}</td></tr>

                                            <tr className="table-dark"><td style={headerStyle}><b>Variants</b></td><td style={cellStyle}>{
                                                magicItem["variants"].length > 0 ? magicItem["variants"].map((variant, index) => (<div key={index}>•&nbsp;{variant["name"]}</div>)) : <span style={{ opacity: "0.25" }}><i>none</i></span>}</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>

                                <div style={{ width: "73%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                                    <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>
                                        Description
                                    </div>

                                    <div className="card-body">

                                        {magicItem["desc"].map((desc, index) => (
                                            <div
                                                key={index}
                                                style={{ textAlign: "left", margin: "0px", padding: "0px" }}
                                                dangerouslySetInnerHTML={{
                                                    __html: `•&nbsp;${desc.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><u>$1</u></strong>')}`,
                                                }}
                                            ></div>
                                        ))}

                                    </div>

                                </div>

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

export default withRouter(MagicItemDetail);
