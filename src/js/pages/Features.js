import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BackGroundImage from "../components/BackgroundImage";

const Features = () => {
    const [features, setFeatures] = useState([]);
    const [sortColumn, setSortColumn] = useState("challenge_rating");
    const [sortOrder, setSortOrder] = useState("asc");

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFeatures, setFilteredFeatures] = useState([]);


    useEffect(() => {
        // Fetch data from JSON file
        fetch("public/data/5e-SRD-Features.json")
            .then((response) => response.json())
            .then((data) => {
                setFeatures(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        // Sort the features array when the sorting column or order changes
        const sortedFeatures = [...features].sort((a, b) => {
            // Handle sorting for the "armor_class" column
            if (sortColumn === "name") {
                // Handle sorting for the "name" column alphabetically
                return sortOrder === "asc"
                    ? a[sortColumn].localeCompare(b[sortColumn])
                    : b[sortColumn].localeCompare(a[sortColumn]);
            }
            else if (sortColumn === "class") {
                // Handle sorting for the "class" column alphabetically
                return sortOrder === "asc"
                    ? a[sortColumn]["name"].localeCompare(b[sortColumn]["name"])
                    : b[sortColumn]["name"].localeCompare(a[sortColumn]["name"]);
            }
            else {
                // For other columns, perform numeric sorting
                return sortOrder === "asc" ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn];
            }
        });

        setFeatures(sortedFeatures);
    }, [sortColumn, sortOrder]);

    useEffect(() => {
        const filtered = features.filter((feature) =>
            feature.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFeatures(filtered);
    }, [searchQuery, features]);

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

    const getNameColor = (lvl) => {

        if (lvl < 3) {
            return "var(--bs-white)";
        }
        else if (lvl < 7) {
            return "var(--bs-green)";
        }
        else if (lvl < 11) {
            return "var(--bs-blue)";
        }
        else if (lvl < 15) {
            return "var(--bs-purple)";
        }
        else if (lvl < 20) {
            return "var(--bs-orange)";
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
                <li className="breadcrumb-item active">Features</li>
            </ol>

            <BackGroundImage image="public/img/mordenkainens-tome-of-foes-cover-art.png" />

            <div style={{ padding: "4%", opacity: "0.95" }}>

                <div className="form-group" style={{ display: "flex", justifyContent: "flex-start" }}>
                    <input className="form-control" style={{ width: "33%", marginBottom: "1%" }} type="text" placeholder="Search feature names..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>

                <table className="table table-hover">
                    <thead className="table-primary">
                        <tr>
                            <th style={{ headerStyle }}></th>
                            <th style={headerStyle} onClick={() => handleColumnHeaderClick("name")}>Name</th>
                            <th style={headerStyle}>Parent</th>
                            <th style={headerStyle} onClick={() => handleColumnHeaderClick("class")}>Class</th>
                            <th style={headerStyle} onClick={() => handleColumnHeaderClick("level")}>Level</th>
                        </tr>
                    </thead>

                    <tbody>
                        {(searchQuery === '' ? features : filteredFeatures).map((feature, index) => (
                            <tr key={index} className={index % 2 === 0 ? "table-active" : "table-dark"} title={feature["desc"]}>
                                <td style={cellStyle}><span style={{ opacity: "0.25" }}>{index + 1}</span></td>
                                <td style={cellStyle}><Link to={`/Features/${feature.index}`} style={{ textDecoration: "none", fontWeight: "bold", color: getNameColor(feature["level"]) }}>{feature["name"]}</Link></td>
                                <td style={cellStyle}>{
                                    feature["parent"] && feature["parent"]["name"]  
                                    ? (`${feature["parent"]["name"]}`)
                                    : <>-</>
                                }</td>

                                <td style={cellStyle}>{feature["class"]["name"]}</td>
                                <td style={cellStyle}>{feature["level"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </>
    );
};

export default Features;
