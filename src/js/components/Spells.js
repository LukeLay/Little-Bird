import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Spells = () => {

    const [sortColumn, setSortColumn] = useState("spell");
    const [sortOrder, setSortOrder] = useState("asc");
    const [spells, setSpells] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSpells, setFilteredSpells] = useState([]);

    useEffect(() => {
        // Fetch data from JSON file
        fetch("public/data/5e-SRD-Spells.json")
          .then((response) => response.json())
          .then((data) => {
            setSpells(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

      useEffect(() => {
        // Sort the spell array when the sorting column or order changes
        const sortedSpells = [...spells].sort((a, b) => {

            //alphabetical columns
          if (sortColumn === "name") {
            return sortOrder === "asc"
              ? a[sortColumn].localeCompare(b[sortColumn])
              : b[sortColumn].localeCompare(a[sortColumn]);
          }

          //school
          else if (sortColumn === "school") {
            const schoolA = a["school"] ? a["school"]["name"] : '';
            const schoolB = b["school"] ? b["school"]["name"] : '';
      
            return sortOrder === "asc" ? schoolA.localeCompare(schoolB) : schoolB.localeCompare(schoolA);
          }

          //numerical columns
          else {
            return sortOrder === "asc" ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];
          }

        });
    
        setSpells(sortedSpells);
      }, [sortColumn, sortOrder]);

      useEffect(() => {
        const filtered = spells.filter((spell) =>
          spell.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredSpells(filtered);
      }, [searchQuery, spells]);
    
      const handleColumnHeaderClick = (column) => {
        if (column === sortColumn) {
          // Toggle sorting order if the same column is clicked again
          setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
          // Set a new sorting column
          setSortColumn(column);
          setSortOrder("asc"); // Default to ascending order
        }
      };

      const cellStyle = {
        fontSize: "1.2rem",
        color: "var(--bs-light)",
      };
    
      const headerStyle = {
        cursor: "pointer",
        fontSize: "1.2rem",
        color: "var(--bs-white)",
        fontWeight: "bold"
      };

      const getNameColor = (lvl) => {
      
        if (lvl == 0) {
          return "var(--bs-white)";
        } 
        else if (lvl < 3) {
          return "var(--bs-green)";
        }
        else if (lvl < 5) {
          return "var(--bs-blue)";
        }
        else if (lvl < 7) {
          return "var(--bs-purple)";
        }
        else if (lvl < 9) {
          return "var(--bs-orange)";
        }
        else {
          return "var(--bs-red)";
        }
      };

    return ( 
        <>
            {spells && (
            
                <>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active">Spells</li>
                    </ol>

                    <img
                        src="public/img/tashas-cauldron-of-everything-cover-art.png"
                        alt="public/img/tashas-cauldron-of-everything-cover-art.png"
                        style={{
                            position: "fixed",
                            top: "50%",       // Vertically center the image
                            left: "50%",      // Horizontally center the image
                            transform: "translate(-50%, -50%)", // Center it perfectly
                            zIndex: "-1",
                            opacity: "1",
                        }}
                    />

                    <div style={{padding: "1%", opacity: "0.95"}}>

                    <div className="form-group" style={{display: "flex", justifyContent: "flex-start"}}>
                      <input className="form-control" style={{width: "33%", marginBottom: "1%"}} type="text" placeholder="Search spells..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                  </div>

                        <table className="table table-hover" style={{ width: "100%" }}>
                            <thead className="table-primary">
                                <tr>
                                    <th style={headerStyle}></th>
                                    <th style={headerStyle} onClick={() => handleColumnHeaderClick("name")}>Spell</th>   
                                    <th style={headerStyle} onClick={() => handleColumnHeaderClick("level")}>Level</th>                     
                                    <th style={headerStyle} onClick={() => handleColumnHeaderClick("school")}>School</th>
                                    <th style={headerStyle}>Classes</th>
                                </tr>
                            </thead>

                            <tbody>
                              {(searchQuery === '' ? spells : filteredSpells).map((spell, index) => (                                
                                <tr key={index} title={spell["desc"]} className={index % 2 === 0 ? "table-active" : "table-dark"}>

                                    <td style={cellStyle}>
                                        {index + 1}
                                    </td>

                                    <td style={cellStyle}>
                                        <Link to={`/Spells/${spell.index}`} style={{ textDecoration: "none", fontWeight: "bold", color: getNameColor(spell["level"]) }}>
                                            {spell.name}
                                        </Link>
                                    </td>    
                                    
                                    <td style={cellStyle}>
                                        {spell["level"]}
                                    </td>

                                    <td style={cellStyle}>
                                        {spell["school"]["name"]}
                                    </td>

                                    <td style={cellStyle}>                                        
                                        {spell["classes"].map((playerclass, index) => (
                                            <span key={index}>
                                                {index > 0 && ", "}{playerclass.name}
                                            </span>
                                        ))}
                                    </td>

                                </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </>
            )}
        </>
     );
}
 
export default Spells;