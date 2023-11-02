import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackGroundImage from "../components/BackgroundImage";

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

  useEffect(() => {
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMonsters(filtered);
  }, [searchQuery, monsters]);

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

  const formatCR = (cr) => {

    return (cr.toString()
      .replace("0.125", "1/8")
      .replace("0.25", "1/4")
      .replace("0.5", "1/2"));

  }

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


  return (
    <>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item active">Monsters</li>
      </ol>

      <BackGroundImage image="public/img/monster-manual-cover-art.png" />

      <div style={{ padding: "4%", opacity: "0.95" }}>

        <div className="form-group" style={{ display: "flex", justifyContent: "flex-start" }}>
          <input className="form-control" style={{ width: "33%", marginBottom: "1%" }} type="text" placeholder="Search monster names..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

        <table className="table table-hover">
          <thead className="table-primary">
            <tr>
              <th style={{ headerStyle }}></th>
              <th style={{ ...headerStyle, textAlign: "center" }} onClick={() => handleColumnHeaderClick("challenge_rating")}>CR</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("name")}>Name</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("type")}>Type</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("armor_class")}>Armor Class</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("hit_points")}>Hit Points</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("strength")}>STR</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("constitution")}>CON</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("dexterity")}>DEX</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("intelligence")}>INT</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("wisdom")}>WIS</th>
              <th style={headerStyle} onClick={() => handleColumnHeaderClick("charisma")}>CHA</th>
            </tr>
          </thead>

          <tbody>
            {(searchQuery === '' ? monsters : filteredMonsters).map((monster, index) => (
              <tr key={index} className={index % 2 === 0 ? "table-active" : "table-dark"}>
                <td style={cellStyle}><span style={{ opacity: "0.25" }}>{index + 1}</span></td>
                <td style={{ ...cellStyle, textAlign: "center" }}>{formatCR(monster.challenge_rating)}</td>
                <td style={cellStyle}><Link to={`/Monsters/${monster.index}`} style={{ textDecoration: "none", fontWeight: "bold", color: getNameColor(monster["challenge_rating"]) }}>{monster.name}</Link></td>
                <td style={cellStyle}>{monster.type}</td>
                <td style={cellStyle}>{monster.armor_class[0].value}</td>
                <td style={cellStyle}>{monster.hit_points}</td>
                <td style={Object.assign({}, cellStyle, { color: getNameColor(monster.strength) })}>{monster.strength}</td>
                <td style={Object.assign({}, cellStyle, { color: getNameColor(monster.constitution) })}>{monster.constitution}</td>
                <td style={Object.assign({}, cellStyle, { color: getNameColor(monster.dexterity) })}>{monster.dexterity}</td>
                <td style={Object.assign({}, cellStyle, { color: getNameColor(monster.intelligence) })}>{monster.intelligence}</td>
                <td style={Object.assign({}, cellStyle, { color: getNameColor(monster.wisdom) })}>{monster.wisdom}</td>
                <td style={Object.assign({}, cellStyle, { color: getNameColor(monster.charisma) })}>{monster.charisma}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </>
  );
};

export default Monsters;
