import React,{useState,useEffect} from 'react'
import './App.css'
import { Link } from 'react-router-dom';

export const Categories = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        const categoryData = data.categories.map(category => ({
          name: category.strCategory,
          image: category.strCategoryThumb
        }));
        setCategories(categoryData);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleSearchButtonClick = () => {
    window.location.href = '/allitems';
  };

  return (
    <>
    {/* categories section */}
    <h1 className='category'>Categories</h1>
    <div className='flex-container'>
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <Link to={`/Menuitems/${category.name}`} style={{ textDecoration: 'none' }}>
              <img src={category.image} alt={category.name} />
            </Link>
            <p className='catname'>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

