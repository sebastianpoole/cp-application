import React from 'react'

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
        <label className="itemSelect">
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

export default renderItemFields;