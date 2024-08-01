import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/stats');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setStats(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {error && <p className="error">Error: {error}</p>}
      <div className="stats">
        <div className="stat">
          <h3>Total Cars</h3>
          <p>{stats.totalCars}</p>
        </div>
        <div className="stat">
          <h3>Cars from Last 10 Years</h3>
          <p>{stats.carsLast10Years}</p>
        </div>
        <div className="stat">
          <h3>Cars from Last 20 Years</h3>
          <p>{stats.carsLast20Years}</p>
        </div>
        <div className="stat">
          <h3>Cars in Price Range $10k-$20k</h3>
          <p>{stats.cars10k20k}</p>
        </div>
        <div className="stat">
          <h3>Cars in Price Range $20k-$30k</h3>
          <p>{stats.cars20k30k}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
