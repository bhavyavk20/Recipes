import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Item.css';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Allitems = () => {
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`);
      console.log(response.data.meals);
      setData(response.data.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [title]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchdata();
  };

  return (
    <div>
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="search here"
            name="inputdata"
            className='inputField'
          />
          <button
            type="submit" className='submitButton'
          >
            Search
          </button>
        </form>
      </div>
      {data ?
        <div className='flex-container'>
          {data.map((item) => (
            <div className='items' key={item.idMeal}>
              <img src={item.strMealThumb} alt={item.strMeal} />
              <h4 className='name'> <b> {item.strMeal}</b></h4>
              <div className='btn-container'>
                <Link to={`/Ingredients/${item.idMeal}`}>
                  <button type='submit' className='btn'>View details</button></Link>
              </div>
            </div>
          ))}
        </div>
        : <div className='error-container'>No Items Found</div>
      }
    </div>
  );
};

export default Allitems;
