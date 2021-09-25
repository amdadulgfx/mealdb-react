import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Details from '../Details/Details';
import MealDisplay from '../MealDisplay/MealDisplay';
import './Meal.css'

const Meal = () => {
    const [mealDb, setMealDb] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMealDb(data.meals));
    }, [])

    const handleDetails = (meal) => {
        // console.log(id);
        setDetails(meal)
    }
    return (
        <div className='meal'>
            <div className='meal-container'>

                {
                    mealDb.map(meal =>
                        <MealDisplay
                            key={meal.idMeal}
                            meal={meal}
                            handleDetails={handleDetails}
                        ></MealDisplay>
                    )
                }

            </div>
            <div>
                <Details details={details}></Details>
            </div>
        </div>
    );
};

export default Meal;