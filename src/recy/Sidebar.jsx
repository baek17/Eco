import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 style={{ marginTop: '80px', marginBottom: '70px' }}>친환경 제품<br />Echo</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/showcase">Showcase</Link></li>
          <li><Link to="/heart">Heart</Link></li>
          <li><Link to="/mypage">My page</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
