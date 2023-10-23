import React, { useState, useEffect } from "react";



const ClassSpells = (props) => {

    const spells = props.spells;

    const spellArraysByLevel = Array.from({ length: 10 }, () => []);

        spells.forEach(spell => {
        const level = spell.level;
        spellArraysByLevel[level].push(spell);
        });

        // Now you have 10 separate arrays, one for each level from 0 to 9
        const cantrips = spellArraysByLevel[0];
        const level1Spells = spellArraysByLevel[1];
        const level2Spells = spellArraysByLevel[2];
        const level3Spells = spellArraysByLevel[3];
        const level4Spells = spellArraysByLevel[4];
        const level5Spells = spellArraysByLevel[5];
        const level6Spells = spellArraysByLevel[6];
        const level7Spells = spellArraysByLevel[7];
        const level8Spells = spellArraysByLevel[8];
        const level9Spells = spellArraysByLevel[9];


    const cellStyle = {
        fontSize: "1.2rem",
        color: "var(--bs-light)",
      };
    
      const headerStyle = {
        cursor: "pointer",
        fontSize: "1.2rem",
        color: "var(--bs-white)",
        fontWeight: "bold",
      };

      const SpellTable = (props) => {

        const spells = props.spells;

        return (
            <>
            <table className="table table-hover" style={{ width: "100%" }}>
                <thead className="table-primary">

                    <tr>
                        <th style={headerStyle}>Spell</th>
                        <th style={headerStyle}>Ritual</th>
                        <th style={headerStyle}>Concentration</th>
                        <th style={{...headerStyle, textAlign: "center"}}>Range</th>
                        <th style={{...headerStyle, textAlign: "center"}}>Duration</th>                   
                    </tr>

                </thead>

                <tbody>
                    {spells.map((spell, index) => (                        
                        <tr key={index} title={spell["desc"]}>
                            <td style={cellStyle}>{spell["name"]}</td>
                            <td style={cellStyle}>{spell["ritual"] ? "Yes" : "No"}</td>
                            <td style={cellStyle}>{spell["concentration"] ? "Yes" : "No"}</td>
                            <td style={{...cellStyle, textAlign: "center"}}>{spell["range"]}</td>
                            <td style={{...cellStyle, textAlign: "center"}}>{spell["duration"]}</td>                            
                            
                        </tr>                        
                    ))}

                </tbody>
                </table>
            
            </>
        );
      }

    return ( 
        <>
            <ul className="nav nav-pills" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" data-bs-toggle="tab" href="#cantrips" aria-selected="true" role="tab">Cantrips</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#firstLevel" aria-selected="false" role="tab">1st Level</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#secondLevel" aria-selected="false" role="tab">2nd Level</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#thirdLevel" aria-selected="true" role="tab">3rd Level</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#fourthLevel" aria-selected="true" role="tab">4th Level</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#fifthLevel" aria-selected="true" role="tab">5th Level</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#sixthLevel" aria-selected="true" role="tab">6th Level</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#seventhLevel" aria-selected="true" role="tab">7th Level</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#eighthLevel" aria-selected="true" role="tab">8th Level</a>
                </li>

                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#ninthLevel" aria-selected="true" role="tab">9th Level</a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade active show" id="cantrips" role="tabpanel">
                    <SpellTable spells={cantrips} />
                </div>
                <div className="tab-pane fade" id="firstLevel" role="tabpanel">
                    <SpellTable spells={level1Spells} />
                </div>
                <div className="tab-pane fade" id="secondLevel" role="tabpanel">
                    <SpellTable spells={level2Spells} />
                </div>
                <div className="tab-pane fade" id="thirdLevel" role="tabpanel">
                    <SpellTable spells={level3Spells} />
                </div>
                <div className="tab-pane fade" id="fourthLevel" role="tabpanel">
                    <SpellTable spells={level4Spells} />
                </div>
                <div className="tab-pane fade" id="fifthLevel" role="tabpanel">
                    <SpellTable spells={level5Spells} />
                </div>
                <div className="tab-pane fade" id="sixthLevel" role="tabpanel">
                    <SpellTable spells={level6Spells} />
                </div>
                <div className="tab-pane fade" id="seventhLevel" role="tabpanel">
                    <SpellTable spells={level7Spells} />
                </div>
                <div className="tab-pane fade" id="eighthLevel" role="tabpanel">
                    <SpellTable spells={level8Spells} />
                </div>
                <div className="tab-pane fade" id="ninthLevel" role="tabpanel">
                    <SpellTable spells={level9Spells} />
                </div>
            </div>




















            
        </> 
    );
}
 
export default ClassSpells;