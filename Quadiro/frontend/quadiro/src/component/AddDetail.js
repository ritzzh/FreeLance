import React, { useState } from "react";
import "../styles/AddDetail.css";

function AddDetail() {
  const [carName, setCarName] = useState("");
  const [manufacturingYear, setManufacturingYear] = useState("");
  const [price, setPrice] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carDetails = {
      carName,
      manufacturingYear,
      price,
    };

    try {
      const res = await fetch("https://backend-xi-green.vercel.app/api/addcar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carDetails),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await res.json();
      setResponse(result);

      setCarName("");
      setManufacturingYear("");
      setPrice("");
      window.location.reload(false);
    } catch (error) {
      setResponse({ error: error.message });
    }
  };

  return (
    <div className="form-container">
      <h3>Add Car Details</h3>
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
