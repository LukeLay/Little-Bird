import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';


const ClassDetail = (props) => {

    const [playerClass, setPlayerClass] = useState(null);

    let classIndex = props.match.params.className;

    useEffect(() => {

        if (classIndex != undefined && classIndex) {
    
          fetch("public/data/5e-SRD-Classes.json")
          .then((response) => response.json())
          .then((data) => {
        
            let foundClass = data.find(obj => obj["index"] == classIndex);
        
            if (foundClass) {
                setPlayerClass(foundClass);
            } 
        
            else {
                console.error("Class not found:", classIndex);
            }
    
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
        }
      }, [classIndex]);

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
                src="public/img/players-handbook-cover-art.png"
                alt="Players Handbook Cover Art"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                  opacity: 1,
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

                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                        <h5 style={{color: "var(--bs-primary)"}}>Hit Die:</h5>&nbsp;
                        1D{playerClass.hit_die}
                    </div>

                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                        <h5 style={{color: "var(--bs-primary)"}}>Proficiencies:</h5>&nbsp;
                        <ul>
                        {playerClass.proficiencies.length > 0 && (
                            playerClass.proficiencies.map((proficiency, index) => (
                            <li key={index}>{proficiency.name}</li> 
                            ))
                        )}
                        </ul>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                        <h5 style={{color: "var(--bs-primary)"}}>Saving Throws:</h5>&nbsp;
                        {playerClass.saving_throws.length > 0 && (
                            playerClass.saving_throws.map((saving_throw, index) => (
                            <div key={index}>{index > 0 && ", "}{saving_throw.name}</div> 
                            ))
                        )}
                    </div>

                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                        <h5 style={{color: "var(--bs-primary)"}}>Starting Equipment:</h5>&nbsp;
                        {playerClass.starting_equipment.length > 0 && (
                            playerClass.starting_equipment.map((equipment, index) => (
                            <div key={index}>{index > 0 && ", "}{equipment.equipment.name}</div> 
                            ))
                        )}
                    </div>

                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                        <h5 style={{color: "var(--bs-primary)"}}>Starting Equipment Options:</h5>&nbsp;
                        <ul>
                        {playerClass["starting_equipment_options"] && playerClass["starting_equipment_options"].length > 0 && (
                            playerClass["starting_equipment_options"].map((choice, index) => (
                                <li>{choice["desc"]}</li>
                            ))
                        )}
                        </ul>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <h5 style={{ color: "var(--bs-primary)" }}>Spellcasting Ability:</h5>&nbsp;
                        {playerClass.spellcasting && playerClass.spellcasting["spellcasting_ability"]
                            ? playerClass.spellcasting["spellcasting_ability"].name
                            : <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>}
                    </div>


                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h5 style={{color: "var(--bs-primary)"}}>Spellcasting:</h5>&nbsp;
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