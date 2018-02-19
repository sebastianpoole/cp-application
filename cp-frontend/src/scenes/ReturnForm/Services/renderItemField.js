import React from 'react'

const renderItemField = ({ input, field }) => {
  const { type, placeholder, label, description, value } = field;
  return(
  <div>
    <label>{description}</label>
      <input {...input} placeholder={placeholder} value={value} type="checkbox" />
   </div>
  )
}

export default renderItemField