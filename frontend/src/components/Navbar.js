import React from 'react';
import '../index.css';

const Navcomp = ({ userId, role }) => {
  return (
    <ul className="nav-links">
      <li><a href="#">Dashboard</a></li>
      <li className="center"><a href="#">Portfolio</a></li>
      <li className="upward"><a href="#">Services</a></li>
      <li className="forward"><a href="#">Feedback</a></li>
    </ul>
  );
}

export default Navcomp;
