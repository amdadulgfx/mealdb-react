import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Details from '../Details/Details';
import MealDisplay from '../MealDisplay/MealDisplay';
import './Meal.css'

const Meal = () => {
    const [mealDb, setMealDb] = useState([]);
    const [details, setDetails] = useState([]);
    const [search, setSearch] = useState([]);
    const [text, setText] = useState('');
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMealDb(data.meals);
                setSearch(data.meals);
            });
    }, [text])

    const handleDetails = (meal) => {
        setDetails(meal)
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        setText(searchText);
        const matchedMeal = mealDb.filter(meal => meal.strMeal.toLowerCase().includes(text.toLowerCase()));
        setSearch(matchedMeal);
    }

    return (
        <div className='meal-parent'>
            <div className="search-container">

                <input type="text" placeholder='search meal' onChange={handleSearch} />
            </div>

            <div className='meal'>
                <div className='meal-container'>

                    {
                        search.map(meal =>
                            <MealDisplay
                                key={meal.idMeal}
                                meal={meal}
                                handleDetails={handleDetails}
                            ></MealDisplay>
                        )
                    }

                    <Details details={details}></Details>
                </div>

            </div>
        </div>
    );
};

export default Meal;