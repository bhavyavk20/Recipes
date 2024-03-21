// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Allitems from './Allitems';
import Ingredients from './Ingredients';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Country } from './Country';
import { Countries } from './Countries';
import { Menuitems } from './Menuitems';
import Favourite from './Favourite';
import { Provider } from 'react-redux';
import { store } from './Store';
import { Categories } from './Categories';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/allitems" element={<Allitems />} />
          <Route path="/country" element={<Country />} />
          <Route path="/ingredients/:mealId" element={<Ingredients />} />
          <Route path="/countries/:countryname" element={<Countries />} />
          <Route path="/menuitems/:categoryname" element={<Menuitems />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/categories' element={<Categories/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


