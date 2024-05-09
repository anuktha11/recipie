import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='head'>
      <h2 style={{marginLeft:'20px'}}>Recipe App</h2>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/recipe">Recipe</a></li>
        {/* <li>Username</li> */}
        {/* <li><a href="/logout">Logout</a></li> */}
      </ul>
    </div>
  );
}

export default Header;
