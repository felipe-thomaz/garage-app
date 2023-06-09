/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store/slices/carsSlice';

const CarList = () => {
  const dispatch = useDispatch();
  
  // A GOOD PLACE TO PUT DERIVED STATES (FILTERING LOGIC - SEARCH LOGIC) IS INSIDE OF "useSelector" FUNCTIONS!
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    // filtering logic
    return data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return(
      <div key={car.id} className='panel'>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button onClick={() => handleCarDelete(car)} className='button is-danger'>Delete</button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList;