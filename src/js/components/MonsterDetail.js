import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';

const MonsterDetail = (props) => {
  const [monster, setMonster] = useState(null);

  // Access the route parameter using props.match.params
  let monsterIndex = props.match.params.monsterName;

  useEffect(() => {

    if (monsterIndex != undefined && monsterIndex) {
    // Fetch data from JSON file
    fetch("public/data/5e-SRD-Monsters.json")
      .then((response) => response.json())
      .then((data) => {
      
        let breakpoint = "";
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

  const borderStyle = {border: "1px solid var(--bs-secondary)", margin: "4px"};

  return (
    <>
      {monster ? (
        <>
          <h2>{monster.name}</h2>

          <div style={borderStyle}>
            {monster && monster.index && monster.index && (<div style={borderStyle}>Index: {monster.index}</div>)}
            {monster && monster.size && (<div style={borderStyle}>Size: {monster.size}</div>)}
            {monster && monster.type && (<div style={borderStyle}>Type: {monster.type}</div>)}
            {monster && monster.subtype && (<div style={borderStyle}>Subtype: {monster.subtype}</div>)}
            {monster && monster.alignment && (<div style={borderStyle}>Alignment: {monster.alignment}</div>)}
            {monster && monster.armor_class && (<div style={borderStyle}>Armor Class: {monster.armor_class[0].value}</div>)}
            {monster && monster.hit_points && (<div style={borderStyle}>Hit Points: {monster.hit_points}</div>)}
            {monster && monster.hit_dice && (<div style={borderStyle}>Hit Dice: {monster.hit_dice}</div>)}
           
            <label className="form-label mt-4">Challenge Rating: {monster["challenge_rating"]}</label>
            <div className="progress" style={{width: "50%", margin: "8px"}}>
            
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{
                  width: `${(parseFloat(monster["challenge_rating"]) / 30) * 100}%`, // Calculate the percentage
                }}
                aria-valuenow={parseFloat(monster["challenge_rating"])}
                aria-valuemin="0"
                aria-valuemax="30" 
              ></div>
            </div>

          </div>

          <table className="table table-hover" style={{width: "50%", margin: "8px"}}>
            <thead className="table-primary">
              <tr>
                <th><div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>STR</div></th>
                <th><div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>DEX</div></th>
                <th><div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>CON</div></th>
                <th><div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>INT</div></th>
                <th><div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>WIS</div></th>
                <th><div style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>CHA</div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-dark">
                <td><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{monster && monster["strength"]}</div></td>
                <td><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{monster && monster["dexterity"]}</div></td>
                <td><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{monster && monster["constitution"]}</div></td>
                <td><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{monster && monster["intelligence"]}</div></td>
                <td><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{monster && monster["wisdom"]}</div></td>
                <td><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{monster && monster["charisma"]}</div></td>
              </tr>
            </tbody>
          </table>

          <div style={borderStyle}>
            Speed: 
            {monster && monster["speed"]["walk"] && ` walk ${monster["speed"]["walk"]}`}
            {monster && monster["speed"]["fly"] && `, fly ${monster["speed"]["fly"]}`}
            {monster && monster["speed"]["swim"] && `, swim ${monster["speed"]["swim"]}`}
            {monster && monster["speed"]["burrow"] && `, burrow ${monster["speed"]["burrow"]}`}
            {monster && monster["speed"]["climb"] && `, climb ${monster["speed"]["climb"]}`}
          </div>

          {monster["proficiencies"] && monster["proficiencies"].length > 0 && (
            <div style={borderStyle}>
                Proficiencies:
                {monster["proficiencies"].map((proficiency, index) => (
                  <div key={index}>
                    -&nbsp;{proficiency["proficiency"]["name"]} {proficiency["value"]}
                  </div>
                ))}
            </div>
          )}
          {!(monster["proficiencies"] && monster["proficiencies"].length > 0) && (
            <div style={borderStyle}>Proficiencies: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}

          {monster["damage_vulnerabilities"] && monster["damage_vulnerabilities"].length > 0 && (
            <div style={borderStyle}>
                Damage Vulnerabilities:
                {monster["damage_vulnerabilities"].map((vulnerability, index) => (
                  <div key={index}>
                    -&nbsp;<span style={{fontWeight: "bold", color: "var(--bs-warning)"}}>{vulnerability}</span>
                  </div>
                ))}
            </div>
          )}
          {!(monster["damage_vulnerabilities"] && monster["damage_vulnerabilities"].length > 0) && (
            <div style={borderStyle}>Damage Vulnerabilities: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}

          {monster["damage_resistances"] && monster["damage_resistances"].length > 0 && (
            <div style={borderStyle}>
                Damage Resistances:
                {monster["damage_resistances"].map((resistance, index) => (
                  <div key={index}>
                    -&nbsp;<span style={{fontWeight: "bold", color: "var(--bs-warning)"}}>{resistance}</span>
                  </div>
                ))}
            </div>
          )}
          {!(monster["damage_resistances"] && monster["damage_resistances"].length > 0) && (
            <div style={borderStyle}>Damage Resistances: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}

          {monster["damage_immunities"] && monster["damage_immunities"].length > 0 && (
            <div style={borderStyle}>
                Damage Immunities:
                {monster["damage_immunities"].map((immunity, index) => (
                  <div key={index}>
                    -&nbsp;<span style={{fontWeight: "bold", color: "var(--bs-warning)"}}>{immunity}</span>
                  </div>
                ))}
            </div>
          )}
          {!(monster["damage_immunities"] && monster["damage_immunities"].length > 0) && (
            <div style={borderStyle}>Damage Immunities: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}

          {monster["condition_immunities"] && monster["condition_immunities"].length > 0 && (
            <div style={borderStyle}>
                Condition Immunities:
                {monster["condition_immunities"].map((immunity, index) => (
                  <div key={index}>
                    -&nbsp;<span style={{fontWeight: "bold", color: "var(--bs-warning)"}}>{immunity.name}</span>
                  </div>
                ))}
            </div>
          )}
          {!(monster["condition_immunities"] && monster["condition_immunities"].length > 0) && (
            <div style={borderStyle}>Condition Immunities: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}

          {monster["senses"] && Object.keys(monster["senses"]).length > 0 && (
            <div style={borderStyle}>
                Senses:
                {Object.keys(monster["senses"]).map((key, index) => (
                  <div key={key}>
                    -&nbsp;<span style={{fontWeight: "bold", color: "var(--bs-warning)"}}>{key.replace(/_/g, ' ')}</span>: {monster["senses"][key]}
                  </div>
                ))}
            </div>
          )}
          {!(monster["senses"] && Object.keys(monster["senses"]).length > 0) && (
            <div style={borderStyle}>Senses: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}

          {monster && monster["languages"] && (<div style={borderStyle}>Languages: {monster["languages"]}</div>)}
          {!(monster && monster["languages"]) && (
            <div style={borderStyle}>Languages: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}

          {monster["special_abilities"] && monster["special_abilities"].length > 0 && (
            <div style={borderStyle}>
                Special Abilities:
                {monster["special_abilities"].map((ability, index) => (
                  <div key={index}>
                    -&nbsp;<span style={{fontWeight: "bold", color: "var(--bs-warning)"}}>{ability["name"]}</span>: {ability["desc"]}
                  </div>
                ))}
            </div>
          )}
          {!(monster["special_abilities"] && monster["special_abilities"].length > 0) && (
            <div style={borderStyle}>Special Abilities: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}



          {monster["actions"] && monster["actions"].length > 0 && (
            <div style={borderStyle}>
                Actions:
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {monster["actions"].map((action, index) => (
                  <div key={index} className="card border-primary mb-3" style={{width: "98%", margin: "4px"}}>
                    <div className="card-header">{index+1}.&nbsp;{action["name"]}</div>
                    <div className="card-body">
                    {action["desc"]}
                    </div>
                  </div>
                ))}
                </div>
            </div>
          )}
          {!(monster["actions"] && monster["actions"].length > 0) && (
            <div style={borderStyle}>Actions: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}

          {monster["legendary_actions"] && monster["actions"].length > 0 && (
            <div style={borderStyle}>
                Actions:
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {monster["legendary_actions"].map((action, index) => (
                  <div key={index} className="card border-primary mb-3" style={{width: "98%", margin: "4px"}}>
                    <div className="card-header">{index+1}.&nbsp;{action["name"]}</div>
                    <div className="card-body">
                    {action["desc"]}
                    </div>
                  </div>
                ))}
                </div>
            </div>
          )}
          {!(monster["legendary_actions"] && monster["legendary_actions"].length > 0) && (
            <div style={borderStyle}>Legendary Actions: <span style={{opacity: "0.25"}}><i>none</i></span></div>
          )}

          {/* <div style={borderStyle}>Url: {monster["url"]}</div> */}

        </>
      ) : (
        <div style={borderStyle}>Loading...</div>
      )}
    </>
  );
};

export default withRouter(MonsterDetail);
