import React, { useState } from 'react';
import '../styles/AddDetail.css';

function AddDetail({ onAddCar }) {
  const [carName, setCarName] = useState('');
  const [manufacturingYear, setManufacturingYear] = useState('');
  const [price, setPrice] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carDetails = {
      carName,
      manufacturingYear,
      price,
    };

    const result = await onAddCar(carDetails);
    setResponse(result);

    // Clear form fields after submission
    setCarName('');
    setManufacturingYear('');
    setPrice('');
  };

  return (
    <div className="form-container">
      <h1>Add Car Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Car Name:
            <input
              type="text"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Manufacturing Year:
            <input
              type="number"
              value={manufacturingYear}
              onChange={(e) => setManufacturingYear(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add Car</button>
      </form>
      {response && <div>{response.message || response.error}</div>}
    </div>
  );
}

export default AddDetail;