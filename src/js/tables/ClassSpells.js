import React, { useState, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';


const ClassSpells = (props) => {

    const spells = props.spells;

    const spellArraysByLevel = Array.from({ length: 10 }, () => []);

        spells.forEach(spell => {
        const level = spell.level;
        spellArraysByLevel[level].push(spell);
        });

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
                            <th style={headerStyle}></th>
                            <th style={headerStyle}>Spell</th>
                            <th style={headerStyle}>School</th>
                            <th style={headerStyle}>Ritual</th>
                            <th style={headerStyle}>Concentration</th>
                            <th style={headerStyle}>Range</th>
                            <th style={headerStyle}>Duration</th>                   
                        </tr>
                    </thead>

                    <tbody>
                        {spells.map((spell, index) => (                        
                            <tr key={index} title={spell["desc"]}>
                                <td style={cellStyle}>{index + 1}</td>
                                {/* <td style={cellStyle}>{spell["name"]}</td> */}

                                <td style={cellStyle}>
                                    <Link to={`/Spells/${spell.index}`} style={{ textDecoration: "none", fontWeight: "bold" }}>
                                        {spell.name}
                                    </Link>
                                </td>
                                
                                <td style={cellStyle}>{spell["school"]["name"]}</td>
                                <td style={cellStyle}>{spell["ritual"] ? "Yes" : "No"}</td>
                                <td style={cellStyle}>{spell["concentration"] ? "Yes" : "No"}</td>
                                <td style={cellStyle}>{spell["range"]}</td>
                                <td style={cellStyle}>{spell["duration"]}</td>                            
                                
                            </tr>                        
                        ))}
                    </tbody>
                </table>
            </>
        );
      }

    return ( 
       <>
            {spells && spells.length > 0 ? (
                <>
                    <ul className="nav nav-pills" role="tablist">
                        <li className={`nav-item ${cantrips.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${cantrips.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#cantrips" aria-selected="true" role="tab">Cantrips</a>
                        </li>
                        <li className={`nav-item ${level1Spells.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${level1Spells.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#firstLevel" aria-selected="false" role="tab">1st Level</a>
                        </li>
                        <li className={`nav-item ${level2Spells.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${level2Spells.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#secondLevel" aria-selected="false" role="tab">2nd Level</a>
                        </li>
                        <li className={`nav-item ${level3Spells.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${level3Spells.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#thirdLevel" aria-selected="true" role="tab">3rd Level</a>
                        </li>
                        <li className={`nav-item ${level4Spells.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${level4Spells.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#fourthLevel" aria-selected="true" role="tab">4th Level</a>
                        </li>
                        <li className={`nav-item ${level5Spells.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${level5Spells.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#fifthLevel" aria-selected="true" role="tab">5th Level</a>
                        </li>
                        <li className={`nav-item ${level6Spells.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${level6Spells.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#sixthLevel" aria-selected="true" role="tab">6th Level</a>
                        </li>
                        <li className={`nav-item ${level7Spells.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${level7Spells.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#seventhLevel" aria-selected="true" role="tab">7th Level</a>
                        </li>
                        <li className={`nav-item ${level8Spells.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${level8Spells.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#eighthLevel" aria-selected="true" role="tab">8th Level</a>
                        </li>
                        <li className={`nav-item ${level9Spells.length === 0 ? 'd-none' : ''}`} role="presentation">
                            <a className={`nav-link ${level9Spells.length === 0 ? '' : ''}`} data-bs-toggle="tab" href="#ninthLevel" aria-selected="true" role="tab">9th Level</a>
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
            ) : (
                <div><span style={{ opacity: "0.25" }}><i>none</i></span></div>
            )
        }
        </> 
    );
}
 
export default ClassSpells;