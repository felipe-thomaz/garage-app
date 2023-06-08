/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store/slices/carsSlice';

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    // access the big State -> access to store (cars) store/index.jsx -> access data key inside carsSlice.js
    return state.cars.data;
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