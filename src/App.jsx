import React, { useState } from 'react';
import { FaBell, FaHeart } from "react-icons/fa";
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='nav-container'>
        
        <button className='toggle-button' onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to='/'><b>HOME</b></Link></li>
          <li><Link to='/categories'><b>CATEGORIES</b></Link></li>
          <li><Link to='/allitems'><b>ALLITEMS</b></Link></li>
          <li><Link to='/favourite'><b>FAVOURITES</b></Link></li>
          <li><Link to='/country'><b>COUNTRY</b></Link></li>
        </ul>
      </div>
      <div className='img-container'>
     <img src='https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0' alt='image'/>
      </div>
    </>
  );
}

export default App;
