import React from 'react';
import './MealDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const MealDisplay = (props) => {
    const { strMeal, strMealThumb, strCategory } = props.meal;
    // console.log(props.handleDetails(idMeal));

    return (

        <div className='meal-display' >
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>Category: {strCategory}</p>
            <button className='details-btn' onClick={() => (props.handleDetails(props.meal))}><FontAwesomeIcon icon={faInfoCircle} />Details</button>
        </div>
    );
};

export default MealDisplay;