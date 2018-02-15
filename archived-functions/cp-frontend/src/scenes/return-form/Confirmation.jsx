import React, { Component } from "react";

export default class Confirmation extends Component {
  render() {
    return (
      <div>
        <h2>Confirm Registration</h2>
        <ul>
          <li><b>Name:</b> {this.props.name}</li>
          <li><b>Email:</b> {this.props.email}</li>
          <li><b>Age:</b> {this.props.age}</li>
          <li><b>Colors:</b> {this.props.colors.join(', ')}</li>
        </ul>
        <ul className="form-fields">
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.props.submitRegistration}>Submit Registration</button>
          </li>
        </ul>
      </div>
    )
  }
}