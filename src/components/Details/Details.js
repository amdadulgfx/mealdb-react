import React from 'react';
import './Details.css';
const Details = (props) => {
    console.log(props.details);
    const { strMeal, strMealThumb, strCategory } = props.details;
    return (
        <div className='meal-details'>
            <img style={{ width: '350px' }} src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{strCategory}</p>
        </div>
    );
};

export default Details;