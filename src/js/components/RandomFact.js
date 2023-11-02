import React, { useState, useEffect } from 'react';

const RandomFact = () => {
    const [facts, setFacts] = useState([]);
    const [randomIndex, setRandomIndex] = useState(null);

    useEffect(() => {
        // Fetch data from JSON file
        fetch("public/data/Facts.json")
            .then((response) => response.json())
            .then((data) => {
                setFacts(data.facts);
                setRandomIndex(Math.floor(Math.random() * data.facts.length));
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        `(${randomIndex + 1} / ${facts.length}) - ${facts[randomIndex]}`
    );
}

export default RandomFact;
