
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Menuitems.css';
import { Link } from 'react-router-dom';


export const Menuitems = () => {
    const [menuItems, setMenuItems] = useState([]);
    const { categoryname } = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryname}`);
                console.log("Response:", response);
                setMenuItems(response.data.meals || []);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchDetails();
    }, [categoryname]);

    return (
        <>
            <div className='container'>
                <h1 className='cat'>{categoryname}</h1>
                <div className='flex-container'>
                    {menuItems.map((menuItem) => (
                        <div className='item' key={menuItem.idMeal}>
                            <img src={menuItem.strMealThumb} alt={menuItem.strMeal} />
                            <p className='paragraph'>{menuItem.strMeal}</p>
                            <div className='btn-container'>
                    <Link to={`/Ingredients/${menuItem.idMeal}`}>
                  <button type='submit' className='btn' id='itm'>View details</button></Link>
              </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};





