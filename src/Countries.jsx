import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Countries.css'
import { Link } from 'react-router-dom';

export const Countries = () => {
    const [country, SetCountry] = useState(['']);
    const { countryname } = useParams();

    useEffect(() => {
        let fetchDetails = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryname}`);
                console.log("gh", response);
                SetCountry(response.data.meals)
            }
            catch (error) {
                console.error("Error fetching country details details:", error);
            }
        };
        fetchDetails();
    }, [])
    return (
        <div className='container'>
            <h1 className='countries'>{countryname}</h1>
            <div className='flex-container'>
                {country.map((country) => (
                    <div className='square'>
                        <img src={country.strMealThumb} alt={country.strMealThumb} />
                        <p className='para'>{country.strMeal}</p>
                        <div className='btn-container'>
                    <Link to={`/Ingredients/${country.idMeal}`}>
                  <button type='submit' className='btn' id='coun'>View details</button></Link>
              </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
