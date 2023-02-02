import React from 'react'
import {Route, Routes} from "react-router-dom"

import TypeOfMeal from '../components/TypeOfMeal';
import Searched from './Searched';
import Recipe from './Recipe/Recipe';
import AboutUs from './AboutUs/AboutUs';
import Popular from '../components/Popular';

function Pages() {
  return (
    <Routes>
      <Route path="/Avocado/" element={<Popular />} />
      <Route path="/typeofmeal/:type" element={<TypeOfMeal />} />
      <Route path="/searched/:search" element={<Searched />} /> 
      <Route path="/recipe/:name" element={<Recipe />} /> 
      <Route path="/aboutUs/" element={<AboutUs />} /> 
    </Routes>
  )
}

export default Pages