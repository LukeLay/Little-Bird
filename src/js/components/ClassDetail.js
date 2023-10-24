import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';
import DiceLogo from "./DiceLogo";
import Barbarian from "./tables/Barbarian";
import Bard from "./tables/Bard";
import Cleric from "./tables/Cleric";
import Druid from "./tables/Druid";
import Fighter from "./tables/Fighter";
import Monk from "./tables/Monk";
import Paladin from "./tables/Paladin";
import Ranger from "./tables/Ranger";
import Rogue from "./tables/Rogue";
import Sorcerer from "./tables/Sorcerer";
import Warlock from "./tables/Warlock";
import Wizard from "./tables/Wizard";
import ClassSpells from "./ClassSpells";


const ClassDetail = (props) => {

    const [playerClass, setPlayerClass] = useState(null);
    const [spells, setSpells] = useState(null);

    let classIndex = props.match.params.className;

    useEffect(() => {

        if (classIndex != undefined && classIndex) {
    
          fetch("public/data/5e-SRD-Classes.json")
          .then((response) => response.json())
          .then((data) => {
        
            let foundClass = data.find(obj => obj["index"] == classIndex);
        
            if (foundClass) {
              foundClass["proficiencies"] = foundClass["proficiencies"].filter(item => !item.name.includes("Saving Throw"));

                setPlayerClass(foundClass);
            } 
        
            else {
                console.error("Class not found:", classIndex);
            }
    
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });

          fetch("public/data/5e-SRD-Spells.json")
          .then((response) => response.json())
          .then((data) => {
        
            let filteredData = data.filter(item => {return item.classes.some(classItem => classItem.index === classIndex);});
            filteredData = filteredData.sort((a, b) => (a.level > b.level) ? 1 : -1);
            setSpells(filteredData);
    
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
        }
      }, [classIndex]);

      const classComponents = {
        "Barbarian": <Barbarian />,
        "Bard": <Bard />,
        "Cleric": <Cleric />,
        "Druid": <Druid />,
        "Fighter": <Fighter />,
        "Monk": <Monk />,
        "Paladin": <Paladin />,
        "Ranger": <Ranger />,
        "Rogue": <Rogue />,
        "Sorcerer": <Sorcerer />,
        "Warlock": <Warlock />,
        "Wizard": <Wizard />
      };
      
      return (
        <>
          {playerClass ? (
            <>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/classes">Classes</Link></li>
                <li className="breadcrumb-item active">{playerClass.name}</li>
              </ol>
      
              <img
                src={`public/img/players-handbook-cover-art.png`}
                alt={`public/img/players-handbook-cover-art.png`}
                style={{
                  position: "fixed",
                  top: "50%", left: "50%",                  
                  transform: "translate(-50%, -50%)", 
                  zIndex: "-1",
                  opacity: "1",                
                }}
                onError={(e) => {
                  e.target.src = "public/img/players-handbook-cover-art.png"; // Set a placeholder image on error
                }}
              />

      
              <div className="card text-white bg-dark mb-3 border-primary" style={{ margin: "8px", opacity: 0.95 }}>
                <div className="card-header" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <h2 style={{ fontWeight: "bold", textShadow: "2px 1px 0px rgba(0, 0, 0, 0.75)" }}>{playerClass.name}</h2>
                </div>
      
                <div className="card-body">

                    {/* Broken Data? */}
                    {/* <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                        <h5 style={{color: "var(--bs-primary)"}}>Subclasseses:</h5>&nbsp;
                        {playerClass.subclasses.length > 0 && (
                            playerClass.subclasses.map((subclass, index) => (
                            <div key={index}>{index > 0 && ", "}{subclass.name}</div> 
                            ))
                        )}
                    </div> */}                  

                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>

                      <div style={{ width: "20%", margin: "1%", borderRadius: "16px", display: "flex", justifyContent: "center", alignItems: "center" }} className="card border-primary mb-3">

                      <img
                        src={`public/img/classes/${playerClass["index"]}.png`}
                        alt={`public/img/classes/${playerClass["index"]}.png`}
                        style={{
                          borderRadius: "16px",
                          maxHeight: "212px",
                          maxWidth: "100%",  // Allow the width to adjust proportionally
                          position: "absolute", // Position the image absolutely
                          top: "50%", // Vertically center the image
                          left: "50%", // Horizontally center the image
                          transform: "translate(-50%, -50%)" // Center it perfectly
                        }}
                        onError={(e) => {
                          e.target.src = "public/img/missingno.png"; // Set a placeholder image on error
                        }}
                      />

                      </div>

                      <div style={{width: "10%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                          <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Hit<br />Die</div> 
                          <div className="card-body" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                          
                          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                          <div className="die" style={{padding: "8px", height: "72px", width: "72px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative"}}>
                            <DiceLogo dice={`D${playerClass.hit_die}`} w="64px" h="64px" />
                            <span style={{ fontWeight: "bold", fontSize: "24px", position: "absolute", zIndex: "1", userSelect: "none" }} >
                              1D{playerClass.hit_die}
                            </span>
                          </div>
                        </div>
                          
                          </div>
                        </div>

                        <div style={{width: "10%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                          
                          <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Spellcasting Ability</div> 
                          <div className="card-body" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                          
                          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                        
                          {playerClass.spellcasting && playerClass.spellcasting["spellcasting_ability"]
                              ? <span style={{fontSize: "24px", fontWeight: "bold"}}>{playerClass.spellcasting["spellcasting_ability"].name}</span>
                              : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>}
                          </div>
                          
                          </div>
                        </div>

                    

                        <div style={{width: "10%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                          <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Saving Throws</div> 
                          <div className="card-body" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                          
                          {playerClass.saving_throws.length > 0 && (
                              playerClass.saving_throws.map((saving_throw, index) => (
                              <div key={index}>•&nbsp;{saving_throw.name}</div> 
                              ))
                          )}
                          
                          </div>
                        </div>

                        <div style={{ width: "40%", margin: "1%", borderRadius: "16px" }} className="card border-primary mb-3">
                          <div className="card-header" style={{ fontWeight: "bold", borderRadius: "16px 16px 0px 0px" }}>Proficiencies</div>
                          <div className="card-body" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                            {playerClass.proficiencies.length > 0 && (
                              playerClass.proficiencies.map((proficiency, index) => (
                                <div key={index} style={{ width: "50%" }}>
                                  •&nbsp;{proficiency.name}
                                </div>
                              ))
                            )}
                          </div>
                        </div>



                    </div>

                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                        <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Starting Equipment</div> 
                        <div className="card-body">
                         
                        {playerClass.starting_equipment.length > 0 ? (
                            playerClass.starting_equipment.map((equipment, index) => (
                            <div key={index}>{equipment.equipment.name}</div> 
                            ))
                        ) : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
                        }
                         
                         </div>
                      </div>

                      <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">

                        <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Starting Equipment Options</div>

                        <div className="card-body">

                          {playerClass["starting_equipment_options"] && playerClass["starting_equipment_options"].length > 0 && (
                              playerClass["starting_equipment_options"].map((choice, index) => (
                                <div className="card-text" key={index}>•&nbsp;{choice["desc"]}</div>
                              ))
                          )}

                        </div>

                      </div>

                    </div>

                    <div className="accordion" style={{margin: "8px"}} id="accordionClassTable">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingClassTable">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseClassTable" aria-expanded="true" aria-controls="collapseClassTable">
                            {playerClass.name} Table
                          </button>
                        </h2>
                        <div id="collapseClassTable" className="accordion-collapse collapse" aria-labelledby="headingClassTable" data-bs-parent="#accordionClassTable">
                          <div className="accordion-body">
                          {classComponents[playerClass.name] || null}
                          </div>
                        </div>
                      </div>
                    </div>  

                    <div className="accordion" style={{margin: "8px"}} id="accordionSpellcasting">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSpellcasting">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSpellcasting" aria-expanded="true" aria-controls="collapseSpellcasting">
                            {playerClass.name} Spellcasting {!playerClass["spellcasting"] && <span style={{ opacity: "0.25" }}><i>&nbsp;-&nbsp;none</i></span>}
                          </button>
                        </h2>
                        <div id="collapseSpellcasting" className="accordion-collapse collapse" aria-labelledby="headingSpellcasting" data-bs-parent="#accordionSpellcasting">
                          <div className="accordion-body">
                            {playerClass["spellcasting"] && playerClass["spellcasting"]["info"] 
                              ? (playerClass["spellcasting"]["info"].map((info, index) => (
                              <div key={index}>                            
                                  <span style={{ fontWeight: "bold", color: "var(--bs-warning)" }}>{info.name}</span>: {info.desc}
                              </div>
                              )))
                              : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion" style={{margin: "8px"}} id="accordionClassSpells">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingClassSpells">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseClassSpells" aria-expanded="true" aria-controls="collapseClassSpells">
                            {playerClass.name} Spells {spells.length == 0 && <span style={{ opacity: "0.25" }}><i>&nbsp;-&nbsp;none</i></span>}
                          </button>
                        </h2>
                        <div id="collapseClassSpells" className="accordion-collapse collapse" aria-labelledby="headingClassSpells" data-bs-parent="#accordionClassSpells">
                          <div className="accordion-body">

                                <ClassSpells spells={spells} />

                          </div>
                        </div>
                      </div>
                    </div>   

                </div>
              </div>
            </>
          ) : (
            <>
              Loading...
            </>
          )}
        </>
      );
      

}
 
export default withRouter(ClassDetail);