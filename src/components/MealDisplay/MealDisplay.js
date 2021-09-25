import React from 'react';
import './MealDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Details from '../Details/Details';
const MealDisplay = (props) => {
    const { strMeal, strMealThumb, strCategory } = props.meal;
    // console.log(props.handleDetails(idMeal));

    return (

        <div className='meal-display' >
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>Category: {strCategory}</p>
            <Details details={props.meal}></Details>
        </div>
    );
};

export default MealDisplay;