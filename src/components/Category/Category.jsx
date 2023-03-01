import React from "react";
import { NavLink } from "react-router-dom";
import './Category.scss';

function Category() {
  return (
    <div>
        <div className="category">
            <NavLink to={'/typeofmeal/maincourse'}>
                <button className="category-card">
                    <h4>Main Course</h4>
                </button>
            </NavLink>
            <NavLink to={'/typeofmeal/salad'}>
                <button className="category-card">
                    <h4>Salad</h4>
                </button>
            </NavLink>

            <NavLink to={'/typeofmeal/dessert'} >
                <button className="category-card">
                    <h4>Dessert</h4>
                </button>
            </NavLink>

            <NavLink to={'/typeofmeal/drink'}>
                <button className="category-card">
                    <h4>Drink</h4>
                </button>
            </NavLink>

        </div>
    </div>
  )
}

export default Category