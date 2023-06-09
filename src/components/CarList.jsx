/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store/slices/carsSlice';

const CarList = () => {
  const dispatch = useDispatch();
  
  // A GOOD PLACE TO PUT DERIVED STATES (FILTERING LOGIC - SEARCH LOGIC) IS INSIDE OF "useSelector" FUNCTIONS!
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    // filtering logic
    const filteredCars = data.filter((car) => {
      // return the list of cars to the user
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // return what the current name is inside of the form (HIGHLIGHTED VALUE)
    return {
      cars: filteredCars,
      name: form.name
    }
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // LOGIC TO DECIDE IF THE CAR SHOULD BE HIGHLIGHTED
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return(
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
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