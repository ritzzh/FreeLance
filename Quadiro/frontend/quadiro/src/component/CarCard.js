import React, { useState } from 'react';
import '../styles/CarCard.css';

function CarCard({ car, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCar, setUpdatedCar] = useState({ ...car });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCar({ ...updatedCar, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(updatedCar);
    setIsEditing(false);
  };

  return (
    <div className="car-card">
      {isEditing ? (
        <>
          <input
            type="text"
            name="carName"
            value={updatedCar.carName}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="manufacturingYear"
            value={updatedCar.manufacturingYear}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            value={updatedCar.price}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>Name: {car.carName}</p>
          <p>Year: {car.manufacturingYear}</p>
          <p>Price: ${car.price}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(car._id)}>Delete</button>
    </div>
  );
}

export default CarCard;
