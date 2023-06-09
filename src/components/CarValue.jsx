/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';

const CarValue = () => {
  // as we don't need the big State object, we're destructuring the State object to get specifics properties out of it (data, searchTerm)
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {

    // filtering the list of cars
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // adding up all costs from cars list
    return filteredCars.reduce((accumalator, car) => {
      return accumalator + car.cost
    }, 0)
  });

  return (
    <div className='car-value'>Total Cost: ${totalCost}</div>
  )
}

export default CarValue