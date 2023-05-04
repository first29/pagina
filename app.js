import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <button>Logout</button>
        </div>
        <div className="dashboard-content">
          <div className="widget">
            <h2 className="widget-title">Users</h2>
            <p className="widget-value">100</p>
          </div>
          <div className="widget">
            <h2 className="widget-title">Sales</h2>
            <p className="widget-value">$10,000</p>
          </div>
          <div className="widget">
            <h2 className="widget-title">Revenue</h2>
            <p className="widget-value">$50,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
