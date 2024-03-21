import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removefav } from './DataSlice';
import { Link } from 'react-router-dom';
import './Favourite.css';

export default function Favourite() {
  const favourites=useSelector((state)=>state.datastore.fav);
  const dispatch=useDispatch();

const removeFromFavourites=(mealId)=>{
  dispatch(removefav(mealId));
};

  return (
    <>
    <div className='container'>
    <h1 className='fav'>Favourites</h1>
    {favourites.length===0?(
      <div>
        No Favourite
      </div>
    ):(
      <div>
        {favourites.map((favourite)=>(
          <div className='flex-container' key={favourite.mealId}>
            <div className='like'>
            <Link to={`/Ingredients/${favourite.mealId}`}>
              <img src={favourite.image} alt={favourite.name}/>
              </Link>
              <h3>{favourite.name}</h3>
              <div className='btn-container'>
              <button onClick={()=>removeFromFavourites(favourite.mealId)} className='btn'>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
</div>
    </>
  )
}
