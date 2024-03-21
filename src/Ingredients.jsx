import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Ingredients.css'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setfav, removefav } from './DataSlice';

const Ingredients = () => {
    const [mealDetails, setMealDetails] = useState(['']);
    const { mealId } = useParams();
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.datastore.fav);

    useEffect(() => {
        let fetchMealDetails = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
                const meal = response.data.meals[0];

                if (meal) {
                    const ingredients = [];
                    const measures = [];
                    for (let i = 1; i <= 20; i++) {
                        const ingredient = meal[`strIngredient${i}`];
                        const measure = meal[`strMeasure${i}`];

                        if (ingredient && measure) {
                            ingredients.push(ingredient);
                            measures.push(measure);
                        } else {
                            break;
                        }
                    }

                    const mealData = {
                        mealId: meal.idMeal,
                        name: meal.strMeal,
                        image: meal.strMealThumb,
                        instructions: meal.strInstructions,
                        ingredients: ingredients,
                        measures: measures
                    };

                    setMealDetails(mealData);
                } else {
                    setMealDetails(null);
                }
            } catch (error) {
                console.error("Error fetching meal details:", error);
            }
        };

        fetchMealDetails();
    }, [mealId]);

    console.log("fghjk", mealDetails);

    const isFavorite = favorites.find((item) => item.mealId === mealDetails.mealId);

    const addToFavorites = () => {
        const isDuplicate = favorites.find((item) => item.mealId === mealDetails.mealId);
        if (!isDuplicate) {
            dispatch(setfav(mealDetails));
        }
    };

    const handleDelete = () => {
        dispatch(removefav(mealDetails.mealId));
    };

    return (
        <>
            <div className='container'>
                {mealDetails && (
                    <div className='details' key={mealDetails.mealId}>
                        <h1 className='h-container'>{mealDetails.name}</h1>
                        <div className='img-container'>
                            <div className='ingimg'>
                                <img src={mealDetails.image} alt={mealDetails.name} /><br />
                                <h2 style={{ fontSize: '24px' }}>ADD TO FAVOURITES <button className='btnheart' onClick={isFavorite ? handleDelete : addToFavorites}>{isFavorite ? <FaHeart /> : <FaRegHeart />}</button></h2>
                            </div>
                            <div>
                                <div className='ingredients'>
                                    <h2>Ingredients</h2><br />
                                    <ul>
                                        {mealDetails && mealDetails.ingredients && mealDetails.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}: {mealDetails.measures[index]}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='instructions'>
                            <h2>Instructions</h2><br />
                            <p>{mealDetails.instructions}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Ingredients;
