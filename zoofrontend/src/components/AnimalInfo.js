import React, { useState, useEffect } from 'react';

const AnimalInfo = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/zoo/animalInfo')
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Entdecke unsere Tiere</h1>
      <div className="row">
        {animals.map((animal, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={animal.image} className="card-img-top" alt={animal.animalType} />
              <div className="card-body">
                <h5 className="card-title">{animal.animalType}</h5>
                <p className="card-text">{animal.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalInfo;
