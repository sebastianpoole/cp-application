import React from 'react'

const fields = [
      { name: 'name', type: 'text', placeholder: 'Enter Game', label: 'Name Label' },
      { name: 'age', type: 'number', placeholder: 'Enter age', label: 'Age Label' },
      { name: 'email', type: 'email', placeholder: 'Enter Email', label: 'Email Label' },
      { name: 'employed', type: 'checkbox', label: 'Employed Label' },
      {
        name: 'favouriteColors',
        type: 'select',
        label: 'Colours Label',
        options: [
          { label: 'Red', value: 'red' },
          { label: 'Yellow', value: 'yellow' },
          { label: 'Green', value: 'green' },
        ],
      },
    ]

const testerField = ({ input, field }) => {
  const { type, placeholder } = field
  if (type === 'text' || type === 'email' || type === 'number' || type === 'checkbox') {
    return <input {...input} placeholder={placeholder} type={type} />
  } else if (type === 'select') {
    const { options } = field
    return (
      <select name={field.name} onChange={input.onChange}>
        {options.map((option, index) => {
          return <option key={index} value={option.value}>{option.label}</option>
        })}
      </select>
    )
  } else {
    return <div>Type not supported.</div>
  }
}

export default testerField