import React, { useState, useEffect } from 'react';

const AnalyzeLibrary = (props) => {
  const [attributesData, setAttributesData] = useState({});
  const [resultData, setResultData] = useState(null); // State variable to hold the result

  useEffect(() => {
    let jsonData = [];
    let sourceFile = `public/data/5e-SRD-${props.src}.json`;

    fetch(sourceFile)
      .then((response) => response.json())
      .then((data) => {
        jsonData = data;

        const result = {
          source: props.src,
          items: data.map((item) => item.name),
        };

        setResultData(result); // Set the result object in the state

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
  }, [props.src]);

  return (
    <div className="card border-primary mb-3">
      <div className="card-header"><h2>{`public/data/5e-SRD-${props.src}.json`}</h2></div>
      <div className="card-body">

        <div className="card-title" style={{color: "var(--bs-info)", fontWeight: "bold"}}>Item Names</div>
        {resultData && ( // Check if resultData is available before rendering
          <div>
            <pre>{JSON.stringify(resultData, null, 2)}</pre>
          </div>
        )}

        <div className="card-title" style={{color: "var(--bs-info)", fontWeight: "bold"}}>Attribute Names</div>
        <ul>
          {Object.entries(attributesData).map(([attribute, count]) => (
            <li key={attribute}>
              {count} x {attribute}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default AnalyzeLibrary;
