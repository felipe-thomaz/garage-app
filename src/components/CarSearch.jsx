/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className='list-header'>
      <h3 className='title is-3'>My Cars</h3>
      <div className="search field is-horizontal">
        <label className='label'>Search</label>
        <input 
          // in order to access "searchTerm" from carsSlice.jsx, we need to access our state inside the store, and for that we make use of "useSelector"!!!
          value={searchTerm} 
          onChange={handleSearchTermChange} 
          className="input" 
        />
      </div>
    </div>
  )
}

export default CarSearch