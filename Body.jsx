import React from 'react'
import {useState, useEffect } from 'react'
import '../App.css'


const Body = () => {

    const [meal, setMeal] = useState([])

useEffect(() => {
  loadMeal();
}, [])


const mealList = meal.map((obj) => {
    return( <div className='mealBox col-md-4'>
        <p className='mealTitle'>{obj.strMeal}</p>
        <img src={obj.strMealThumb} className='mealImg img-fluid' />
        <p className='mealTitle'>{obj.idMeal}</p>
    </div>
    )
})


    const loadMeal =  async () => {

//   fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then(response => response.json()).then(data => console.log(data))

        console.log("loading...")
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        let data = await res.json()
        console.log(data)
        setMeal(data.meals)

      };
  return (
    <div className='body'>
        <div className="row">
            <h1 style={{padding: '30px'}}>Top Selling Items</h1>
            {mealList}
        </div>
    </div>
  )
}

export default Body
