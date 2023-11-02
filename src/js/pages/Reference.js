import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackGroundImage from "../components/BackgroundImage";

const Reference = () => {


    const cellStyle = {
        fontSize: "1.2rem",
        color: "var(--bs-light)",
    };

    const headerStyle = {
        cursor: "pointer",
        fontSize: "1.2rem",
        color: "var(--bs-light)",
        fontWeight: "bold"
    };

    return (
        <>

            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Reference</li>
            </ol>

            <BackGroundImage image="public/img/keys-from-the-golden-vault-cover-art.png" />

            <div style={{ padding: "4%", opacity: "0.95" }}>

                <div className="card text-white bg-dark mb-3 border-primary" style={{ display: "flex", flexDirection: "column", margin: "8px", opacity: "0.95" }}>
                    <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>Calculations</h2>
                    </div>

                    <div className="card-body" style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>

                        <table className="table table-hover" style={{ width: "66.66%", margin: "1%" }}>
                            <thead className="table-primary">
                                <tr><th>Figure</th><th>Formula</th></tr>
                            </thead>
                            <tbody>
                                <tr><td style={cellStyle}><span style={{ fontWeight: "bold", color: "var(--bs-primary)" }}>Skill Modifier</span></td><td style={cellStyle}>Ability Modifier + Proficiency Bonus + Other Bonuses</td></tr>
                                <tr><td style={cellStyle}><span style={{ fontWeight: "bold", color: "var(--bs-primary)" }}>Carrying Capacity</span></td><td style={cellStyle}>15 x Strength Ability Score</td></tr>
                                <tr><td style={cellStyle}><span style={{ fontWeight: "bold", color: "var(--bs-primary)" }}>Initiative Bonus</span></td><td style={cellStyle}>Dexterity Modifier</td></tr>
                                <tr><td style={cellStyle}><span style={{ fontWeight: "bold", color: "var(--bs-primary)" }}>Passive Perception</span></td><td style={cellStyle}>10 + Perception Skill</td></tr>
                                <tr><td style={cellStyle}><span style={{ fontWeight: "bold", color: "var(--bs-primary)" }}>Spell Save DC</span></td><td style={cellStyle}>8 + Proficiency Bonus</td></tr>
                                <tr><td style={cellStyle}><span style={{ fontWeight: "bold", color: "var(--bs-primary)" }}>Spell Attack Bonus</span></td><td style={cellStyle}>Spellcasting Ability Modifier + Proficiency Bonus</td></tr>
                                <tr><td style={cellStyle}><span style={{ fontWeight: "bold", color: "var(--bs-primary)" }}>Armor Class (AC)</span></td><td style={cellStyle}>Base Armor Class (Race/Class/Equipment) + Dexterity Modifier (light/medium armor) + Shield AC (if applicable)</td></tr>
                            </tbody>
                        </table>

                    </div>
                </div>

                <div className="card text-white bg-dark mb-3 border-primary" style={{ display: "flex", flexDirection: "column", margin: "8px", opacity: "0.95" }}>
                    <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>XP / Level Table</h2>
                    </div>

                    <div className="card-body" style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>

                        <table className="table table-hover" style={{ width: "48%", margin: "1%" }}>
                            <thead className="table-primary">
                                <tr><th>XP</th><th>Level</th><th>Proficiency Bonus</th></tr>
                            </thead>
                            <tbody>
                                <tr><td style={cellStyle}>0</td><td style={cellStyle}>1</td><td style={cellStyle}>+2</td></tr>
                                <tr><td style={cellStyle}>300</td><td style={cellStyle}>2</td><td style={cellStyle}>+2</td></tr>
                                <tr><td style={cellStyle}>900</td><td style={cellStyle}>3</td><td style={cellStyle}>+2</td></tr>
                                <tr><td style={cellStyle}>2,700</td><td style={cellStyle}>4</td><td style={cellStyle}>+2</td></tr>
                                <tr><td style={cellStyle}>6,500</td><td style={cellStyle}>5</td><td style={cellStyle}>+3</td></tr>
                                <tr><td style={cellStyle}>14,000</td><td style={cellStyle}>6</td><td style={cellStyle}>+3</td></tr>
                                <tr><td style={cellStyle}>23,000</td><td style={cellStyle}>7</td><td style={cellStyle}>+3</td></tr>
                                <tr><td style={cellStyle}>34,000</td><td style={cellStyle}>8</td><td style={cellStyle}>+3</td></tr>
                                <tr><td style={cellStyle}>48,000</td><td style={cellStyle}>9</td><td style={cellStyle}>+4</td></tr>
                                <tr><td style={cellStyle}>64,000</td><td style={cellStyle}>10</td><td style={cellStyle}>+4</td></tr>
                                <tr><td style={cellStyle}>85,000</td><td style={cellStyle}>11</td><td style={cellStyle}>+4</td></tr>
                                <tr><td style={cellStyle}>100,000</td><td style={cellStyle}>12</td><td style={cellStyle}>+4</td></tr>
                                <tr><td style={cellStyle}>120,000</td><td style={cellStyle}>13</td><td style={cellStyle}>+5</td></tr>
                                <tr><td style={cellStyle}>140,000</td><td style={cellStyle}>14</td><td style={cellStyle}>+5</td></tr>
                                <tr><td style={cellStyle}>165,000</td><td style={cellStyle}>15</td><td style={cellStyle}>+5</td></tr>
                                <tr><td style={cellStyle}>195,000</td><td style={cellStyle}>16</td><td style={cellStyle}>+5</td></tr>
                                <tr><td style={cellStyle}>225,000</td><td style={cellStyle}>17</td><td style={cellStyle}>+6</td></tr>
                                <tr><td style={cellStyle}>265,000</td><td style={cellStyle}>18</td><td style={cellStyle}>+6</td></tr>
                                <tr><td style={cellStyle}>305,000</td><td style={cellStyle}>19</td><td style={cellStyle}>+6</td></tr>
                                <tr><td style={cellStyle}>355,000</td><td style={cellStyle}>20</td><td style={cellStyle}>+6</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card text-white bg-dark mb-3 border-primary" style={{ display: "flex", flexDirection: "column", margin: "8px", opacity: "0.95" }}>
                    <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>Ability Score / Modifiers</h2>
                    </div>

                    <div className="card-body" style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>

                        <table className="table table-hover" style={{ width: "33.3%", margin: "1%" }}>
                            <thead className="table-primary">
                                <tr><th>Ability Score</th><th>Modifier</th></tr>
                            </thead>
                            <tbody>
                                <tr><td style={cellStyle}>1</td><td style={cellStyle}>-5</td></tr>
                                <tr><td style={cellStyle}>2-3</td><td style={cellStyle}>-4</td></tr>
                                <tr><td style={cellStyle}>4-5</td><td style={cellStyle}>-3</td></tr>
                                <tr><td style={cellStyle}>6-7</td><td style={cellStyle}>-2</td></tr>
                                <tr><td style={cellStyle}>8-9</td><td style={cellStyle}>-1</td></tr>
                                <tr><td style={cellStyle}>10-11</td><td style={cellStyle}>+0</td></tr>
                                <tr><td style={cellStyle}>12-13</td><td style={cellStyle}>+1</td></tr>
                                <tr><td style={cellStyle}>14-15</td><td style={cellStyle}>+2</td></tr>
                                <tr><td style={cellStyle}>16-17</td><td style={cellStyle}>+3</td></tr>
                                <tr><td style={cellStyle}>18-19</td><td style={cellStyle}>+4</td></tr>
                                <tr><td style={cellStyle}>20-21</td><td style={cellStyle}>+5</td></tr>
                                <tr><td style={cellStyle}>22-23</td><td style={cellStyle}>+6</td></tr>
                                <tr><td style={cellStyle}>24-25</td><td style={cellStyle}>+7</td></tr>
                                <tr><td style={cellStyle}>26-27</td><td style={cellStyle}>+8</td></tr>
                                <tr><td style={cellStyle}>28-29</td><td style={cellStyle}>+9</td></tr>
                                <tr><td style={cellStyle}>30</td><td style={cellStyle}>+10</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card text-white bg-dark mb-3 border-primary" style={{ display: "flex", flexDirection: "column", margin: "8px", opacity: "0.95" }}>
                    <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>Size</h2>
                    </div>

                    <div className="card-body" style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>

                        <table className="table table-hover" style={{ width: "98%", margin: "1%" }}>
                            <thead className="table-primary">
                                <tr>
                                    <th>Size Category</th>
                                    <th>AC Modifier</th>
                                    <th>Special Attacks Modifier</th>
                                    <th>Hide Modifier</th>
                                    <th>Height/Length</th>
                                    <th>Weight</th>
                                    <th>Space</th>
                                    <th>Reach (Tall)</th>
                                    <th>Reach (Long)</th>
                                    <th>Carrying Capacity Multiplier (Biped)</th>
                                    <th>Carrying Capacity Multiplier (Quadroped)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={cellStyle}>Fine</td>
                                    <td style={cellStyle}>+8</td>
                                    <td style={cellStyle}>-16</td>
                                    <td style={cellStyle}>+16</td>
                                    <td style={cellStyle}>6 in. or less</td>
                                    <td style={cellStyle}>1/8 lb. or less</td>
                                    <td style={cellStyle}>1/2 ft.</td>
                                    <td style={cellStyle}>0 ft.</td>
                                    <td style={cellStyle}>0 ft.</td>
                                    <td style={cellStyle}>x1/8</td>
                                    <td style={cellStyle}>x1/4</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Diminutive</td>
                                    <td style={cellStyle}>+4</td>
                                    <td style={cellStyle}>-12</td>
                                    <td style={cellStyle}>+12</td>
                                    <td style={cellStyle}>6 in.–1 ft.</td>
                                    <td style={cellStyle}>1/8–1 lb.</td>
                                    <td style={cellStyle}>1 ft.</td>
                                    <td style={cellStyle}>0 ft.</td>
                                    <td style={cellStyle}>0 ft.</td>
                                    <td style={cellStyle}>x1/4</td>
                                    <td style={cellStyle}>x1/2</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Tiny</td>
                                    <td style={cellStyle}>+2</td>
                                    <td style={cellStyle}>-8</td>
                                    <td style={cellStyle}>+8</td>
                                    <td style={cellStyle}>1–2 ft.</td>
                                    <td style={cellStyle}>1–8 lb.</td>
                                    <td style={cellStyle}>2-1/2 ft.</td>
                                    <td style={cellStyle}>0 ft.</td>
                                    <td style={cellStyle}>0 ft.</td>
                                    <td style={cellStyle}>x1/2</td>
                                    <td style={cellStyle}>x3/4</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Small</td>
                                    <td style={cellStyle}>+1</td>
                                    <td style={cellStyle}>-4</td>
                                    <td style={cellStyle}>+4</td>
                                    <td style={cellStyle}>2–4 ft.</td>
                                    <td style={cellStyle}>8–60 lb.</td>
                                    <td style={cellStyle}>5 ft.</td>
                                    <td style={cellStyle}>5 ft.</td>
                                    <td style={cellStyle}>5 ft.</td>
                                    <td style={cellStyle}>x3/4</td>
                                    <td style={cellStyle}>x1</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Medium</td>
                                    <td style={cellStyle}>+0</td>
                                    <td style={cellStyle}>+0</td>
                                    <td style={cellStyle}>+0</td>
                                    <td style={cellStyle}>4–8 ft.</td>
                                    <td style={cellStyle}>60–500 lb.</td>
                                    <td style={cellStyle}>5 ft.</td>
                                    <td style={cellStyle}>5 ft.</td>
                                    <td style={cellStyle}>5 ft.</td>
                                    <td style={cellStyle}>x1</td>
                                    <td style={cellStyle}>x1-1/2</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Large</td>
                                    <td style={cellStyle}>-1</td>
                                    <td style={cellStyle}>+4</td>
                                    <td style={cellStyle}>+4</td>
                                    <td style={cellStyle}>8–16 ft.</td>
                                    <td style={cellStyle}>500–4,000 lb.</td>
                                    <td style={cellStyle}>10 ft.</td>
                                    <td style={cellStyle}>10 ft.</td>
                                    <td style={cellStyle}>5 ft.</td>
                                    <td style={cellStyle}>x2</td>
                                    <td style={cellStyle}>x3</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Huge</td>
                                    <td style={cellStyle}>-2</td>
                                    <td style={cellStyle}>+8</td>
                                    <td style={cellStyle}>+8</td>
                                    <td style={cellStyle}>16–32 ft.</td>
                                    <td style={cellStyle}>4,000–32,000 lb.</td>
                                    <td style={cellStyle}>15 ft.</td>
                                    <td style={cellStyle}>15 ft.</td>
                                    <td style={cellStyle}>10 ft.</td>
                                    <td style={cellStyle}>x4</td>
                                    <td style={cellStyle}>x6</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Gargantuan</td>
                                    <td style={cellStyle}>-4</td>
                                    <td style={cellStyle}>+12</td>
                                    <td style={cellStyle}>+12</td>
                                    <td style={cellStyle}>32–64 ft.</td>
                                    <td style={cellStyle}>32,000–250,000 lb.</td>
                                    <td style={cellStyle}>20 ft.</td>
                                    <td style={cellStyle}>20 ft.</td>
                                    <td style={cellStyle}>15 ft.</td>
                                    <td style={cellStyle}>x8</td>
                                    <td style={cellStyle}>x12</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Colossal</td>
                                    <td style={cellStyle}>-8</td>
                                    <td style={cellStyle}>+16</td>
                                    <td style={cellStyle}>+16</td>
                                    <td style={cellStyle}>64 ft. or more</td>
                                    <td style={cellStyle}>250,000 lb. or more</td>
                                    <td style={cellStyle}>30 ft.</td>
                                    <td style={cellStyle}>30 ft.</td>
                                    <td style={cellStyle}>20 ft.</td>
                                    <td style={cellStyle}>x16</td>
                                    <td style={cellStyle}>x24</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

                <div className="card text-white bg-dark mb-3 border-primary" style={{ display: "flex", flexDirection: "column", margin: "8px", opacity: "0.95" }}>
                    <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>Currency / Exchange Rates</h2>
                    </div>

                    <div className="card-body" style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>

                        <table className="table table-hover" style={{ width: "66.66%", margin: "1%" }}>
                            <thead className="table-primary">
                                <tr>
                                    <th>Coin</th>
                                    <th>CP</th>
                                    <th>SP</th>
                                    <th>EP</th>
                                    <th>GP</th>
                                    <th>PP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={cellStyle}>Copper (CP)</td>
                                    <td style={cellStyle}>1</td>
                                    <td style={cellStyle}>10</td>
                                    <td style={cellStyle}>50</td>
                                    <td style={cellStyle}>100</td>
                                    <td style={cellStyle}>1,000</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Silver (SP)</td>
                                    <td style={cellStyle}>1/10</td>
                                    <td style={cellStyle}>1</td>
                                    <td style={cellStyle}>5</td>
                                    <td style={cellStyle}>10</td>
                                    <td style={cellStyle}>100</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Electrum (EP)</td>
                                    <td style={cellStyle}>1/50</td>
                                    <td style={cellStyle}>1/5</td>
                                    <td style={cellStyle}>1</td>
                                    <td style={cellStyle}>2</td>
                                    <td style={cellStyle}>20</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Gold (GP)</td>
                                    <td style={cellStyle}>1/100</td>
                                    <td style={cellStyle}>1/10</td>
                                    <td style={cellStyle}>1/2</td>
                                    <td style={cellStyle}>1</td>
                                    <td style={cellStyle}>10</td>
                                </tr>
                                <tr>
                                    <td style={cellStyle}>Platinum (PP)</td>
                                    <td style={cellStyle}>1/1,000</td>
                                    <td style={cellStyle}>1/100</td>
                                    <td style={cellStyle}>1/20</td>
                                    <td style={cellStyle}>1/10</td>
                                    <td style={cellStyle}>1</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>

        </>

    );
}

export default Reference;