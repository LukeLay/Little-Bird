import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

const SpellDetail = (props) => {

    const [spell, setSpell] = useState(null);

    let spellIndex = props.match.params.spellName;

    useEffect(() => {

        if (spellIndex != undefined && spellIndex) {

            fetch("public/data/5e-SRD-Spells.json")
            .then((response) => response.json())
            .then((data) => {
    
            let foundSpell = data.find(obj => obj["index"] == spellIndex);
    
            if (foundSpell) {
                setSpell(foundSpell);
            } 
    
            else {
                console.error("Spell not found:", spellIndex);
            }
    
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        }

    }, [spellIndex]);

    return ( 
        <>
            {spell ? (
            <>

                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/Spells">Spells</Link></li>
                    <li className="breadcrumb-item active">{spell.index}</li>
                </ol>

                <div className="card text-white bg-dark mb-3 border-primary" style={{ margin: "8px", opacity: 0.95 }}>

                    <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>{spell.name}</h2>
                    </div>

                    <div className="card-body" style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

                        <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Index
                            </div> 
                            <div className="card-body">                            
                                {spell["index"]
                                    ? (spell["index"])                                 
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Name
                            </div> 
                            <div className="card-body">                            
                                {spell["name"]
                                    ? (spell["name"])                                 
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Description
                            </div> 
                            <div className="card-body">                            
                                {spell["desc"]
                                    ? (
                                        <div style={{display: "flex", flexDirection: "column"}}>
                                            {spell["desc"].map((desc, index) => (
                                                <div key={index}>•&nbsp;{desc}</div>
                                            ))}
                                        </div>
                                    )                                                                     
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Higher Levels
                            </div> 
                            <div className="card-body">                            
                                {spell["higher_level"]
                                    ? (
                                        <div>
                                            {spell["higher_level"].map((level, index) => (
                                                <div key={index}>•&nbsp;{level}</div>
                                            ))}
                                        </div>
                                    )                                                                     
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>
                        
                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Range
                            </div> 
                            <div className="card-body">                            
                                {spell["range"]
                                    ? (
                                        <div>
                                            {spell["range"]}
                                        </div>
                                    )                                                                     
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Components
                            </div> 
                            <div className="card-body">                            
                                {spell["components"]
                                    ? (
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            {spell["components"].map((component, index) => (
                                                <div key={index}>{index > 0 && ", "}{component}</div>
                                            ))}
                                        </div>
                                    )                                                                     
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Material
                            </div> 
                            <div className="card-body">                            
                                {spell["material"]
                                    ? (
                                        <div>
                                           {spell["material"]}
                                        </div>
                                    )                                                                     
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Ritual
                            </div> 
                            <div className="card-body">                            
                                {spell["ritual"] != undefined
                                    ? (
                                        <div>
                                           {spell["ritual"] ? "Yes" : "No"}
                                        </div>
                                    )                                                                     
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Duration
                            </div> 
                            <div className="card-body">                            
                                {spell["duration"] != undefined
                                    ? (
                                        <div>
                                           {spell["duration"]}
                                        </div>
                                    )                                                                     
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                            <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>
                                Concentration
                            </div> 
                            <div className="card-body">                            
                                {spell["concentration"] != undefined
                                    ? (
                                        <div>
                                           {spell["concentration"] ? "Yes" : "No"}
                                        </div>
                                    )                                                                     
                                    : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                                }                            
                            </div>
                      </div>


                    </div>

                </div>
            </>
            ) : (
                <>
                    Loading...
                </>
            )
            }
        </>

     );
}
 
export default SpellDetail;