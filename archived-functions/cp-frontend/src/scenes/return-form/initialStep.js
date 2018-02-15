import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

export default class InitialStep extends Component{
	constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: ""
      };
    }

    handleSubmit = event => {
      event.preventDefault();
    }

    nextStep = (e) => {
	    e.preventDefault()
        const password_entry = this.state.password
        const email_entry = this.state.email
	    const data = {
	      password : this.state.password,
	      email    : this.state.email,
	    }

	    alert(this.state.email);
	    this.props.nextStep(data);
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
  }

	render() {
		return(
			<div>
                <FormGroup controlId="email" bsSize="large">
		            <ControlLabel>Email</ControlLabel>
		            <FormControl
		              autoFocus
		              type="email"
		              value={this.state.email}
		              onChange={this.handleChange}
		            />
		          </FormGroup>
		          <FormGroup controlId="password" bsSize="large">
		            <ControlLabel>Password</ControlLabel>
		            <FormControl
		              value={this.state.email}
		              onChange={this.handleChange}
		              type="password"
		            />
		        </FormGroup>
		        <Button
		          block
		          bsSize="large"
		          type="submit"
		          onClick={this.nextStep}
		        >
		        Login
		        </Button>
            </div>
		)
	}
}