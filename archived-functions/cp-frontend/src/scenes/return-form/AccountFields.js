import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

export default class AccountFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Raph"
    }

  }

  nextStep = (e) => {
    e.preventDefault()

    // Get values via this.refs
    // var data = {
    //   name     : this.props.name,
    //   password : this.props.password,
    //   email    : this.props.email,
    // }
    const hello = "Hey There";
    this.props.nextStep(hello);
  }

  render() {
    return (
      <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.props.handleChange}
          />
      </FormGroup>
      <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
    )
  }


}