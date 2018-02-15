import React from 'react'
import { Field, label, reduxForm } from 'redux-form'
//import validate from '../services/validate'
import renderItemFields from '../services/renderItemFields'

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
