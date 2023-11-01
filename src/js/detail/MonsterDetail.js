import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesDown, faAnglesUp, faBookOpen, faBookmark, faBrain, faComment, faDiceFive, faHandFist, faHeart, faHeartPulse, faLightbulb, faPerson, faPersonRunning, faRulerCombined, faShield, faShieldHalved, faShieldHeart, faShieldVirus, faStar, faTableCells} from '@fortawesome/free-solid-svg-icons'


const MonsterDetail = (props) => {
  const [monster, setMonster] = useState(null);

  let monsterIndex = props.match.params.monsterName;

  useEffect(() => {

    if (monsterIndex != undefined && monsterIndex) {

      fetch("public/data/5e-SRD-Monsters.json")
      .then((response) => response.json())
      .then((data) => {

      let foundMonster = data.find(obj => obj["index"] == monsterIndex);

      if (foundMonster) {
        setMonster(foundMonster);
      } 

      else {
        console.error("Monster not found:", monsterIndex);
      }

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }
  }, [monsterIndex]);

  const getCRClassNames = (cr) => {

    if (cr < 10) {
      return "progress-bar progress-bar-striped bg-success";
    } 
    else if (cr <= 20) {
      return "progress-bar progress-bar-striped bg-warning";
    } 
    else {
      return "progress-bar progress-bar-striped bg-danger";
    }

  }

  const getNameColor = (cr) => {

    if (cr < 5) {
      return "var(--bs-white)";
    } 
    else if (cr < 10) {
      return "var(--bs-green)";
    }
    else if (cr < 15) {
      return "var(--bs-blue)";
    }
    else if (cr < 20) {
      return "var(--bs-purple)";
    }
    else if (cr < 30) {
      return "var(--bs-orange)";
    }
    else {
      return "var(--bs-red)";
    }
  };

  const borderStyle = {border: "1px solid var(--bs-secondary)", margin: "4px"};

  const cellStyle = {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    fontSize: "18px",
    padding: "4px"
  }; 

  return (
    <>



      {monster ? (
      <>
      
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/Monsters">Monsters</Link></li>
          <li className="breadcrumb-item active">{monster["index"]}</li>
        </ol>
      
        <img
          src={`public/img/monsters/${monster["index"]}.png`}
          alt={`public/img/monsters/${monster["index"]}.png`}
          style={{
            position: "fixed",
            top: "50%",       // Vertically center the image
            left: "50%",      // Horizontally center the image
            transform: "translate(-50%, -50%)", // Center it perfectly
            zIndex: "-1",
            opacity: "1",
          }}
          onError={(e) => {
            e.target.src = "public/img/monster-manual-cover-art.png"; // Set a placeholder image on error
          }}
        />



        <div className="card text-white bg-dark mb-3 border-primary" style={{margin: "8px", opacity: "0.95"}}>



          <div className="card-header" style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <h2 style={{fontWeight: "bold", textShadow: "2px 1px 0px rgba(0,0,0,0.75)", color: getNameColor(monster["challenge_rating"])}}>{monster.name}</h2>
            {/* <span style={{opacity: "0.25"}}>&nbsp;({monster.index})</span> */}
          </div>

          <div className="card-body">

            <div style={{display: "flex", flexDirection: "row"}}>

            <div className="card-header" style={{ width: "33.33%", border: `2px solid ${getNameColor(monster["challenge_rating"])}`, borderRadius: "16px", position: "relative" }}>

              <img
                src={`public/img/monsters/${monster["index"]}.png`}
                alt={`public/img/monsters/${monster["index"]}.png`}
                style={{
                  borderRadius: "16px",
                  maxHeight: "256px",
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


              <div style={{width: "66.66%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>

                <table className="table table-hover" style={{width: "98%", margin: "1%"}}>
                  <thead className="table-info">
                    <tr> 
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faShield} size="2x" color=""/>AC</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faHeart} size="2x" color=""/>HP</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faDiceFive} size="2x" color=""/>Hit Dice</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faStar} size="2x" color=""/>XP</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faRulerCombined} size="2x" color=""/>Size</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faBookOpen} size="2x" color=""/>Type</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faBookmark} size="2x" color=""/>Sub-Type</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faTableCells} size="2x" color=""/>Alignment</div></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-dark">
                      <td><div style={cellStyle}>{monster && monster["armor_class"][0].value}</div></td>
                      <td><div style={cellStyle}>{monster && monster["hit_points"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["hit_dice"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["xp"].toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}</div></td>
                      <td><div style={cellStyle}>{monster && monster["size"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["type"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["subtype"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["alignment"]}</div></td>                    
                    </tr>
                  </tbody>
                </table>

                <table className="table table-hover" style={{width: "98%", margin: "1%"}}>
                  <thead className="table-primary">
                    <tr>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faHandFist} size="2x" color=""/>STR</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faPersonRunning} size="2x" color=""/>DEX</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faHeartPulse} size="2x" color=""/>CON</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faBrain} size="2x" color=""/>INT</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faLightbulb} size="2x" color=""/>WIS</div></th>
                      <th><div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "18px"}}><FontAwesomeIcon icon={faComment} size="2x" color=""/>CHA</div></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-dark">
                      <td><div style={cellStyle}>{monster && monster["strength"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["dexterity"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["constitution"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["intelligence"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["wisdom"]}</div></td>
                      <td><div style={cellStyle}>{monster && monster["charisma"]}</div></td>
                    </tr>
                  </tbody>
                </table>

              </div>

              

            </div>

            
            <div>
              <label className="form-label mt-4" style={{marginLeft: "1%"}}>Challenge Rating: {monster["challenge_rating"]}</label>
              <div className="progress" style={{width: "98%", margin: "1%", borderRadius: "16px"}}>

                <div className={getCRClassNames(monster["challenge_rating"])} role="progressbar" style={{width: `${(parseFloat(monster["challenge_rating"]) / 30) * 100}%`}} aria-valuenow={parseFloat(monster["challenge_rating"])} aria-valuemin="0" aria-valuemax="30">
                </div>

              </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

              <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Proficiencies</div> 
                <div className="card-body">
                  {monster["proficiencies"].map((proficiency, index) => (<div key={index}>•&nbsp;{proficiency["proficiency"]["name"]} {proficiency["value"]}</div>))}
                  {!(monster["proficiencies"] && monster["proficiencies"].length > 0) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
                </div>
              </div>

              <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">

                <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Speed</div> 

                <div className="card-body">
                  {monster && monster["speed"]["walk"] && <div className="card-text">•&nbsp;Walk: {monster["speed"]["walk"]}</div>}
                  {monster && monster["speed"]["fly"] && <div className="card-text">•&nbsp;Fly: {monster["speed"]["fly"]}</div>}
                  {monster && monster["speed"]["swim"] && <div className="card-text">•&nbsp;Swim: {monster["speed"]["swim"]}</div>}
                  {monster && monster["speed"]["burrow"] && <div className="card-text">•&nbsp;Burrow: {monster["speed"]["burrow"]}</div>}
                  {monster && monster["speed"]["climb"] && <div className="card-text">•&nbsp;Climb: {monster["speed"]["climb"]}</div>}
                </div>

              </div>

            </div>

            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

              <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Senses</div> 
                  <div className="card-body">
                    {Object.keys(monster["senses"]).map((key, index) => (<div key={key}>•&nbsp;{key.replace(/_/g, ' ')}: {monster["senses"][key]}</div>))}
                    {!(monster["senses"] && Object.keys(monster["senses"]).length > 0) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
                  </div>
              </div>

              <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Languages</div> 
                  <div className="card-body">
                    {monster["languages"] && <div>•&nbsp;{monster["languages"]}</div>}
                    {!(monster["languages"]) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
                  </div>
              </div>

            </div>

            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
              <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Damage Vulnerabilities <FontAwesomeIcon icon={faAnglesDown} size="1x" color="var(--bs-danger)"/></div> 
                <div className="card-body">
                  {monster["damage_vulnerabilities"].map((vulnerability, index) => (<div key={index}>•&nbsp;{vulnerability}</div>))}
                  {!(monster["damage_vulnerabilities"] && monster["damage_vulnerabilities"].length > 0) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
                </div>
              </div>

              <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Damage Resistances <FontAwesomeIcon icon={faAnglesUp} size="1x" color="var(--bs-success)"/></div> 
                <div className="card-body">
                  {monster["damage_resistances"] && monster["damage_resistances"].length > 0 && monster["damage_resistances"].map((resistance, index) => (<div key={index}>•&nbsp;{resistance}</div>))}
                  {!(monster["damage_resistances"] && monster["damage_resistances"].length > 0) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
                </div>
              </div>

            </div>

            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

              <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Damage Immunities <FontAwesomeIcon icon={faShieldHeart} size="1x" color="var(--bs-default)"/></div> 
                  <div className="card-body">
                    {monster["damage_immunities"] && monster["damage_immunities"].length > 0 && monster["damage_immunities"].map((immunity, index) => (<div key={index}>•&nbsp;{immunity}</div>))}
                    {!(monster["damage_immunities"] && monster["damage_immunities"].length > 0) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
                  </div>
              </div> 

              <div style={{width: "48%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
                <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Condition Immunities <FontAwesomeIcon icon={faShieldVirus} size="1x" color="var(--bs-default)"/></div> 
                  <div className="card-body">
                    {monster["condition_immunities"] && monster["condition_immunities"].length > 0 && monster["condition_immunities"].map((immunity, index) => (<div key={index}>•&nbsp;{immunity["name"]}</div>))}
                    {!(monster["condition_immunities"] && monster["condition_immunities"].length > 0) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
                  </div>
              </div>

            </div>

            <div style={{width: "98%", margin: "1%", borderRadius: "16px"}} className="card border-primary mb-3">
              <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Special Abilities</div> 
                <div className="card-body">
                  {monster["special_abilities"] && monster["special_abilities"].length > 0 && monster["special_abilities"].map((ability, index) => (<div key={index}>•&nbsp;<span style={{fontWeight: "bold", color: "var(--bs-warning)"}}>{ability["name"]}</span>: {ability["desc"]}</div>))}
                  {!(monster["special_abilities"] && monster["special_abilities"].length > 0) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
                </div>
            </div>

            <div style={{width: "98%", margin: "1%", borderRadius: "16px"}} className="card bg-dark border-secondary mb-3">
              <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Actions</div> 
                <div className="card-body">
                  {monster["actions"] && monster["actions"].length > 0 && monster["actions"].map((action, index) => (<div key={index}>•&nbsp;<span style={{fontWeight: "bold", color: "var(--bs-warning)"}}>{action["name"]}</span>: {action["desc"]}</div>))}
                  {!(monster["actions"] && monster["actions"].length > 0) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
                </div>
            </div>

            <div style={{width: "98%", margin: "1%", borderRadius: "16px"}} className="card bg-dark border-secondary mb-3">
              <div className="card-header" style={{fontWeight: "bold", borderRadius: "16px 16px 0px 0px"}}>Legendary Actions</div> 
                <div className="card-body">
                  {monster["legendary_actions"] && monster["legendary_actions"].length > 0 && monster["legendary_actions"].map((action, index) => (<div key={index}>•&nbsp;<span style={{fontWeight: "bold", color: "var(--bs-warning)"}}>{action["name"]}</span>: {action["desc"]}</div>))}
                  {!(monster["legendary_actions"] && monster["legendary_actions"].length > 0) && (<div><span style={{opacity: "0.25"}}><i>none</i></span></div>)}
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

export default withRouter(MonsterDetail);
