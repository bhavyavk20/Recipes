import React, { useState, useEffect } from 'react';
import './Country.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Country = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        // const result = await response.json();
        setData(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='container'>
        <h1 className='country'>Country</h1>
      </div>
      <div className='flex-container'>
        {data.map((item) => (
          <div className='box' key={item.strArea}>
            <Link to={`/Countries/${item.strArea}`} className='link-white'><p>{item.strArea}</p></Link>
          </div>
        ))}
      </div>
    </>
  );
};
