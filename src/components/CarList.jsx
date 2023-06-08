/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';

const CarList = () => {
  const cars = useSelector((state) => {
    // access the big State -> access to store (cars) store/index.jsx -> access data key inside carsSlice.js
    return state.cars.data;
  });

  return (
    <div></div>
  )
}

export default CarList;