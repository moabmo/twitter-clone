import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/notifications">Notifications</Link>
    <Link to="/messages">Messages</Link>
  </div>
);

export default Sidebar;
