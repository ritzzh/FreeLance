import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import "../styles/CarList.css";

function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  const fetchCars = async () => {
    try {
      const res = await fetch("https://quadiro-five.vercel.app/api/showcars");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setCars(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://quadiro-five.vercel.app/api/deletecar/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      setCars(cars.filter((car) => car._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdate = async (updatedCar) => {
    try {
      const res = await fetch(
        `https://quadiro-five.vercel.app/api/updatecar/${updatedCar._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCar),
        }
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setCars(cars.map((car) => (car._id === data._id ? data : car)));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="cars-container">
      <h3>Added Cars</h3>
      <div className="car-list">
        {error && <p className="error">Error: {error}</p>}
        {cars.length === 0 && !error ? (
          <p>No cars to show</p>
        ) : (
          cars.map((car) => (
            <CarCard
              key={car._id}
              car={car}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CarList;
