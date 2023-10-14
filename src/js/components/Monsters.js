import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Monsters = () => {
  const [monsters, setMonsters] = useState([]);
  const [sortColumn, setSortColumn] = useState("challenge_rating");
  const [sortOrder, setSortOrder] = useState("asc");

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);


  useEffect(() => {
    // Fetch data from JSON file
    fetch("public/data/5e-SRD-Monsters.json")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Sort the monsters array when the sorting column or order changes
    const sortedMonsters = [...monsters].sort((a, b) => {
      // Handle sorting for the "armor_class" column
      if (sortColumn === "armor_class") {
        const armorClassA = a[sortColumn][0].value;
        const armorClassB = b[sortColumn][0].value;
        return sortOrder === "asc" ? armorClassA - armorClassB : armorClassB - armorClassA;
      } 
      else if (sortColumn === "name" || sortColumn === "type") {
        // Handle sorting for the "name" column alphabetically
        return sortOrder === "asc"
          ? a[sortColumn].localeCompare(b[sortColumn])
          : b[sortColumn].localeCompare(a[sortColumn]);
      }
      else {
        // For other columns, perform numeric sorting
        return sortOrder === "asc" ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];
      }
    });

    setMonsters(sortedMonsters);
  }, [sortColumn, sortOrder]);

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

  useEffect(() => {
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMonsters(filtered);
  }, [searchQuery, monsters]);
  

  return (
    <>
        <div className="form-group" style={{display: "flex", justifyContent: "flex-end"}}>
            <input className="form-control" style={{margin: "8px", width: "33%"}} type="text" placeholder="Search monster names..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

        <table className="table table-hover">
            <thead className="table-primary">
                <tr>
                    <th>Rank</th>
                    <th onClick={() => handleColumnHeaderClick("name")}>Name</th>
                    <th onClick={() => handleColumnHeaderClick("challenge_rating")}>Challenge Rating</th>     
                    <th onClick={() => handleColumnHeaderClick("type")}>Type</th>     
                    <th onClick={() => handleColumnHeaderClick("armor_class")}>Armor Class</th>
                    <th onClick={() => handleColumnHeaderClick("hit_points")}>Hit Points</th>
                    <th onClick={() => handleColumnHeaderClick("constitution")}>Constitution</th>
                    <th onClick={() => handleColumnHeaderClick("strength")}>Strength</th>
                    <th onClick={() => handleColumnHeaderClick("dexterity")}>Dexterity</th>
                    <th onClick={() => handleColumnHeaderClick("intelligence")}>Intelligence</th>
                    <th onClick={() => handleColumnHeaderClick("wisdom")}>Wisdom</th>
                    <th onClick={() => handleColumnHeaderClick("charisma")}>Charisma</th>
                </tr>
            </thead>

            <tbody>
            {(searchQuery === '' ? monsters : filteredMonsters).map((monster, index) => (
                <tr key={index} className={index % 2 === 0 ? "table-dark" : "table-secondary"}>    
                    <td>{index + 1}</td>
                    <td><Link to={`/Monsters/${monster.index}`}>{monster.name}</Link></td>
                    <td>{monster.challenge_rating}</td>
                    <td>{monster.type}</td>
                    <td>{monster.armor_class[0].value}</td>
                    <td>{monster.hit_points}</td>
                    <td>{monster.constitution}</td>
                    <td>{monster.strength}</td>
                    <td>{monster.dexterity}</td>
                    <td>{monster.intelligence}</td>
                    <td>{monster.wisdom}</td>
                    <td>{monster.charisma}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </>
  );
};

export default Monsters;
