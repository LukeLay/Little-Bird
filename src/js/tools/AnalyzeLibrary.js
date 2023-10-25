import React, { useState, useEffect } from 'react';

const AnalyzeLibrary = (props) => {
  const [attributesData, setAttributesData] = useState({});

  useEffect(() => {
    let jsonData = [];
    let sourceFile = `public/data/5e-SRD-${props.src}.json`;

    fetch(sourceFile)
      .then((response) => response.json())
      .then((data) => {
        jsonData = data;

        const attributesCount = jsonData.reduce((acc, obj) => {
          Object.keys(obj).forEach((key) => {
            acc[key] = (acc[key] || 0) + 1;
          });
          return acc;
        }, {});

        // Convert the attributesCount object to an array of [attribute, count] pairs
        const attributeCountPairs = Object.entries(attributesCount);

        // Sort the array in descending order of counts
        attributeCountPairs.sort((a, b) => b[1] - a[1]);

        // Convert the sorted array back to an object
        const sortedAttributesData = Object.fromEntries(attributeCountPairs);

        setAttributesData(sortedAttributesData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>{props.src} attributes:</h2>
      <ul>
        {Object.entries(attributesData).map(([attribute, count]) => (
          <li key={attribute}>
            {count} x {attribute}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyzeLibrary;
