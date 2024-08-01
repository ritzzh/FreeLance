import React, { useState, useEffect } from 'react';
import '../styles/CarList.css';

function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch('http://localhost/api/showcars');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setCars(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="cars-container">
      <h2>Added Cars</h2>
      {error && <p className="error">Error: {error}</p>}
      {cars.length === 0 && !error ? (
        <p>No cars to show</p>
      ) : (
        cars.map((car, index) => (
          <div key={index} className="car-card">
            <p>Name: {car.carName}</p>
            <p>Year: {car.manufacturingYear}</p>
            <p>Price: ${car.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CarList;
