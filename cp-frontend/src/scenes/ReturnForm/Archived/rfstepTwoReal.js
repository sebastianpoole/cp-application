import React, {Component} from 'react'
import { Field, label, reduxForm } from 'redux-form'
//import validate from '../services/validate'
import renderItemField from '../services/renderItemField'

const renderItemFields = ({ input, meta, itemFields }) => {
    const {name, onChange, onBlur, onFocus} = input;
    const {touched, error} = meta;
    const inputValue = input.value;

    const checkboxes = itemFields.map(({name, value, price, size, colour, qty, image}, index) => {

      const handleChange = (event) => {
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.push(value);
        }
        else {
          arr.splice(arr.indexOf(value), 1);
        }
        onBlur(arr);
        return onChange(arr);
      };
      const checked = inputValue.includes(value);
      return (
        <div key={`${index}`}>
        <img src={image} />
        <span className="itemSize">Size: {size}</span>
        <span className="itemPrice">Total: {price}</span>
        <span className="itemColour">Colour: {colour}</span>
        <span className="itemQty">Qty: {qty}</span>
        <label>
          <input type="checkbox" name={name} value={value} checked={checked} onChange={handleChange} onFocus={onFocus} />
          <span>{name}</span>
        </label>
        </div>
      );
    });

    return (
          <div>{checkboxes}</div>
    );
}

const ReturnFormStepOne = props => {
  const { handleSubmit, previousPage, itemFields } = props
  //console.log({itemFields})
  return (
      <form onSubmit={handleSubmit}>
      <Field 
        type="checkbox" 
        name="returnedItems" 
        component={renderItemFields}
        itemFields={itemFields}
        />
        <div>
        <button type="submit" className="next">
           Next
         </button>
        </div>
        </form>
  );
}


export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true
})(ReturnFormStepOne)
