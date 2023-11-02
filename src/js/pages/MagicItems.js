import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const MagicItems = () => {

    const [items, setItems] = useState([]);

    const [sortColumn, setSortColumn] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        // Fetch data from JSON file
        fetch("public/data/5e-SRD-Magic-Items.json")
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        const sortedItems = [...items].sort((a, b) => {
            if (sortColumn === "name") {
                // Handle sorting for the "name" and "category" columns alphabetically
                return sortOrder === "asc"
                    ? a[sortColumn].localeCompare(b[sortColumn])
                    : b[sortColumn].localeCompare(a[sortColumn]);
            }
            else if (sortColumn === "equipment_category") {
                // Handle sorting for the "category" column alphabetically
                return sortOrder === "asc"
                    ? a.equipment_category.name.localeCompare(b.equipment_category.name)
                    : b.equipment_category.name.localeCompare(a.equipment_category.name);
            }
            else if (sortColumn === "rarity") {
                // Handle sorting for the "rarity" column in ascending order
                const raritiesOrder = ["Varies", "Common", "Uncommon", "Rare", "Very Rare", "Legendary", "Artifact"];
                const rarityA = raritiesOrder.indexOf(a["rarity"]["name"]);
                const rarityB = raritiesOrder.indexOf(b["rarity"]["name"]);
                return sortOrder === "asc" ? rarityA - rarityB : rarityB - rarityA;
            } else {
                // For other columns, perform numeric sorting
                return sortOrder === "asc" ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];
            }
        });

        setItems(sortedItems);
    }, [sortColumn, sortOrder]);

    useEffect(() => {
        const filtered = items.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(filtered);
    }, [searchQuery, items]);


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

    const getNameColor = (rarity) => {

        if (rarity == "Common" || rarity == "Varies") {
            return "var(--bs-white)";
        }
        else if (rarity == "Uncommon") {
            return "var(--bs-green)";
        }
        else if (rarity == "Rare") {
            return "var(--bs-blue)";
        }
        else if (rarity == "Very Rare") {
            return "var(--bs-purple)";
        }
        else if (rarity == "Legendary") {
            return "var(--bs-orange)";
        }
        else if (rarity == "Artifact") {
            return "var(--bs-red)";
        }
        else {
            return "var(--bs-red)";
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

    return (
        <>

            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">MagicItems</li>
            </ol>

            <img
                src="public/img/strixhaven-curriculum-of-chaos-cover-art.png"
                alt="public/img/strixhaven-curriculum-of-chaos-cover-art.png"
                style={{
                    position: "fixed",
                    top: "50%",       // Vertically center the image
                    left: "50%",      // Horizontally center the image
                    transform: "translate(-50%, -50%)", // Center it perfectly
                    zIndex: "-1",
                    opacity: "1",
                }}
            />

            <div style={{ padding: "1%", opacity: "0.95" }}>

                <div className="form-group" style={{ display: "flex", justifyContent: "flex-start" }}>
                    <input className="form-control" style={{ width: "33%", marginBottom: "1%" }} type="text" placeholder="Search item names..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>

                <table className="table table-hover" style={{ width: "100%" }}>
                    <thead className="table-primary">
                        <tr>
                            <th style={headerStyle}></th>
                            <th style={headerStyle} onClick={() => handleColumnHeaderClick("name")}>Name</th>
                            <th style={headerStyle} onClick={() => handleColumnHeaderClick("equipment_category")}>Category</th>
                            <th style={headerStyle} onClick={() => handleColumnHeaderClick("rarity")}>Rarity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {(searchQuery === '' ? items : filteredItems).map((item, index) => {

                            // if (item["variant"] === false) {
                            //   return null; // Skip this row
                            // }

                            return (
                                <tr key={index} className={index % 2 === 0 ? "table-active" : "table-dark"}>
                                    <td style={cellStyle}><span style={{ opacity: "0.25" }}>{index + 1}</span></td>
                                    <td style={cellStyle}>
                                        <Link to={`/MagicItems/${item.index}`} style={{ ...cellStyle, textDecoration: "none", color: getNameColor(item["rarity"]["name"]) }}>
                                            {item.name}
                                        </Link>
                                    </td>
                                    <td style={cellStyle}>
                                        {item["equipment_category"]["name"] || "None"}
                                    </td>
                                    <td style={Object.assign({}, cellStyle, { color: getNameColor(item["rarity"]["name"]) })}>
                                        {item["rarity"]["name"] || "None"}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>

            </div>



        </>
    );
}

export default MagicItems;