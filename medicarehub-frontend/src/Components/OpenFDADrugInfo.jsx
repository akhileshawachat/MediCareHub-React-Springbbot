import React, { useState } from 'react';
import axios from 'axios';


const OpenFDADrugInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [drugInfo, setDrugInfo] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.fda.gov/drug/event.json?search=${searchTerm}&limit=4`
        // You can customize the API endpoint and parameters based on your requirements
      );

      if (response.data.results && response.data.results.length > 0) {
        const drugData = response.data.results.map(result => {
          const { patient } = result;
          const medicineName = patient.drug[0].medicinalproduct;
          const generalName = patient.drug[0].openfda && patient.drug[0].openfda.generic_name ? patient.drug[0].openfda.generic_name[0] : 'N/A';
          const route = patient.drug[0].openfda && patient.drug[0].openfda.route ? patient.drug[0].openfda.route[0] : 'N/A';
          const pharmClass = patient.drug[0].openfda && patient.drug[0].openfda.pharm_class_cs ? patient.drug[0].openfda.pharm_class_cs[0] : 'N/A';
          const drugIndication = patient.drug[0].drugindication || 'N/A';
          const { reaction } = patient;
          return { medicineName, generalName, route, pharmClass, drugIndication, reaction };
        });
        setDrugInfo(drugData);
        setError(null);
      } else {
        setDrugInfo([]);
        setError('No drug information found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setDrugInfo([]);
      setError('Error fetching drug information. Please try again.');
    }
  };

  return (
    <div>
      <h2 className='FDA'>Use only for urgent matters</h2>
      <form className='FDA' onSubmit={handleSearch}>
        <label>
          Enter Drug or Symptom:
          <input type="text" value={searchTerm} onChange={handleInputChange} />
          <button type="submit">Search</button>
        </label>
        
      </form>
      <br></br>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {drugInfo.length > 0 && (
        <div className="drug-container">
          {drugInfo.map((info, index) => (
            <div className="drug-card" key={index}>
              <h3>Medicine Name:</h3>
              <p>{info.medicineName}</p>
              <h3>General Name:</h3>
              <p>{info.generalName}</p>
              <h3>Route:</h3>
              <p>{info.route}</p>
              <h3>Pharm Class:</h3>
              <p>{info.pharmClass}</p>
              <h3>Indication:</h3>
              <p>{info.drugIndication}</p>
              <h3>Reactions:</h3>
              <ul>
                {info.reaction.map((reaction, index) => (
                  <li key={index}>{reaction.reactionmeddrapt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OpenFDADrugInfo;
