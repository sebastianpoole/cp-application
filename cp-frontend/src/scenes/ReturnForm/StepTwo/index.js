import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import validate from '../services/validate'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderReasonField = ({ input, itemFields, meta: { touched, error } }) => {
  return(
  <ul>
    <li>
      {touched && error && <span>{error}</span>}
    </li>
    {itemFields.map(({name, value, price, size, colour, qty, image}, index) =>
      <li key={index}>
        <img src={image} />
        <span className="itemSize">Size: {size}</span>
        <span className="itemPrice">Total: {price}</span>
        <span className="itemColour">Colour: {colour}</span>
        <span className="itemQty">Qty: {qty}</span>
        <h4>Reason for {name}</h4>
        <Field
          name={`${value}.reason`}
          type="text"
          component={renderField}
          label="Reason"
          type="text"/>
        <h4>Comment for {name}</h4>
        <Field
          name={`${value}.comment`}
          type="text"
          component={renderField}
          label="Comment"
          type="textarea"/>
      </li>
    )}
  </ul>
  )
}

const ReturnFormStepTwo = props => {
  const { handleSubmit, previousPage, itemFields } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FieldArray name="returnReasons" component={renderReasonField} itemFields={itemFields}/>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'returnForm', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ReturnFormStepTwo)
