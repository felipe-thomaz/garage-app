import { useDispatch, useSelector } from 'react-redux';
import { addCar, changeCost, changeName } from '../store';

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const carCost = parseFloat(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // we assumed back on carsSlice.js that the payload property should be an object that has 'name' and 'cost'
    dispatch(addCar({ name: name, cost: cost }));
    // because these keys are identical to the ones we are accessing on line 6 (useSelector), it could be shorten to: { name, cost }
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit} action="#">
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input value={name} onChange={handleNameChange} className='input is-expanded' />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input value={cost || ''} onChange={handleCostChange} type='number' className='input is-expanded' />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm;