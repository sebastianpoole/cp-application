import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import ReturnFormStepOne from './steps/rfStepOne';
import ReturnFormStepTwo from './steps/rfStepTwo';
import ReturnFormStepThree from './steps/rfStepThree';
import request from "superagent";
import DisplayValues from '../values/index';
import {
  Values
} from 'redux-form-website-template';
import "./styles.css";

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
    }
  }

  componentDidMount() {
    this.getFormFields();
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
    console.log(values);
    request
   .post('https://ry7fo9wi4l.execute-api.ap-southeast-1.amazonaws.com/prod/returns')
   .set('Content-Type', 'application/json')
   .send(values)
   .end(function (err, res) {
   console.log(JSON.stringify(err));
   this.props.history.push("/");
   });
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
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
          />
        )}
        {page === 3 && (
          <ReturnFormStepThree  
            previousPage={this.previousPage}
            onSubmit={this.showResults}
          />
        )}
        <DisplayValues />
      </div>
      
    )
  }
}

export default ReturnForm;
