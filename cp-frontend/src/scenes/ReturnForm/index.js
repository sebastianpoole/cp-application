import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import ReturnFormStepOne from './StepOne/index';
import ReturnFormStepTwo from './StepTwo/index';
import ReturnFormStepThree from './StepThree/index';
import request from "superagent";
import DisplayValues from '../Values/index';
import {
  Values
} from 'redux-form-website-template';
import { formValueSelector, reduxForm, getFormValues } from 'redux-form';

class ReturnForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.getFormFields = this.getFormFields.bind(this);
    this.state = {
      page: 1,
      itemFields: [],
      secondFields: [],
      formValues: [],
    }
  }

  componentDidMount() {
    this.getFormFields();
  }

  updateFormData(currentFormValues) {
    // Get the Order List
    const currentItemFields = this.state.itemFields;

    // Set New list of Item Fields
    const formItemList = [];
    currentFormValues.returnedItems.forEach(function (value) {
      var foundItem = currentItemFields.filter(orderItems => orderItems.value == value)
      formItemList.push(foundItem[0]);
    });
    return formItemList;
  }

  getFormFields() {
    // Go Get the Form Fields
    this.setState({ 
    itemFields: [
        { name: 'TOM BORED Sunglasses FT0285 52K Havana 61MM', value: 'LAZ0000012341', description: 'TOM FORD Sunglasses FT0285 52K Havana 61MM', brand: 'Lazada', size: 'One Size', 'colour': 'Gold/Brown', qty: '1', price: '$100.95', image: "https://shop.lux-eyewear.com/wp-content/uploads/2014/11/cole-tortoise-gold-600x300.jpg"},
        { name: 'TOM SWORD Sunglasses FT0285 52K Havana 60MM', value: 'LAZ0000123123', description: 'TOM FORD Sunglasses FT0285 52K Havana 61MM', brand: 'Lazada', size: 'One Size', 'colour': 'Gold/Brown', qty: '1', price: '$100.95', image: "https://shop.lux-eyewear.com/wp-content/uploads/2014/11/cole-tortoise-gold-600x300.jpg"},
        { name: 'TOM FORD Sunglasses FT0285 52K Havana 59MM', value: 'LAZ0000123124', description: 'TOM FORD Sunglasses FT0285 52K Havana 61MM', brand: 'Lazada', size: 'One Size', 'colour': 'Gold/Brown', qty: '1', price: '$100.95', image: "https://shop.lux-eyewear.com/wp-content/uploads/2014/11/cole-tortoise-gold-600x300.jpg"}      
      ],
    secondFields: [
        { name: 'TOM BORED Sunglasses FT0285 52K Havana 61MM', value: 'LAZ0000012341', description: 'TOM FORD Sunglasses FT0285 52K Havana 61MM', brand: 'Lazada', size: 'One Size', 'colour': 'Gold/Brown', qty: '1', price: '$100.95'},
        { name: 'TOM SWORD Sunglasses FT0285 52K Havana 60MM', value: 'LAZ0000123123', description: 'TOM FORD Sunglasses FT0285 52K Havana 61MM', brand: 'Lazada', size: 'One Size', 'colour': 'Gold/Brown', qty: '1', price: '$100.95'},
        { name: 'TOM FORD Sunglasses FT0285 52K Havana 59MM', value: 'LAZ0000123124', description: 'TOM FORD Sunglasses FT0285 52K Havana 61MM', brand: 'Lazada', size: 'One Size', 'colour': 'Gold/Brown', qty: '1', price: '$100.95'}
    ]
    });
  }
  
  showResults(values) {
    // Console Log the current item values (can be removed)
    console.log(values);

    // Make the API Request to database
    request
   .post('https://ry7fo9wi4l.execute-api.ap-southeast-1.amazonaws.com/prod/returns')
   .set('Content-Type', 'application/json')
   .send(values)
   .end(function (err, res) {
   console.log(JSON.stringify(err));
   this.props.history.push("/");
   });
  }

  nextPage(values) {
    // Set the values variable
    const currentFormValues = values;

    // Call the update function to create a list of current items selected for return
    var newList = this.updateFormData(currentFormValues);

    // Set the state of the page and the new item list to use in the form
    this.setState({ 
      page: this.state.page + 1,
      formValues: newList
    })
  }

  previousPage() {
    // Set the state of the page
    this.setState({ 
      page: this.state.page - 1
    })
  }

  render() {
    const { page } = this.state
    return (
      <div>
        {page === 1 && <ReturnFormStepOne onSubmit={this.nextPage} getFields={this.getFormFields} itemFields={this.state.itemFields}/>}
        {page === 2 && (
          <ReturnFormStepTwo
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            itemFields={this.state.formValues}
          />
        )}
        {page === 3 && (
          <ReturnFormStepThree  
            previousPage={this.previousPage}
            onSubmit={this.showResults}
            itemFields={this.state.formValues}
          />
        )}
        <DisplayValues />
      </div>
      
    )
  }
}

export default ReturnForm;
