import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import InitialStep from "./initialStep"

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Seb",
      email: "bogus.com",
      password: "",
      age: "",
      colours: "",
      step: 1
    };
  };

  shaveValues = () => {
      alert("Hello!");
  }

  saveValues = () => {
      alert("Hello!");
  }

  callFeedback = () => {
    alert("Fuck Yes!!");
  }

  nextStep = (message) => {
    alert(message);
    this.setState({
        email: "this.message"
    });
  }

  previousStep = () => {
    this.setState({
      step : this.state.step - 1
    })
  }

  submitRegistration() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
  }

  validateForm() {
   
  }

  showStep() {
    switch (this.state.step) {
      case 1:
        return <InitialStep   name={this.state.name}
                              callFeedback={this.callFeedback}
                              nextStep={this.nextStep}
                              handleChange={this.handleChange}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} 
                              validateForm={this.validateForm} />
      case 2:
        return 
      case 3:
        return
      case 4:
        return
    }
  }

  render() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <div>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        <form onSubmit={this.handleConfirmationSubmit}>
          {this.showStep()}
        </form>
      </div>
    )
  }
}