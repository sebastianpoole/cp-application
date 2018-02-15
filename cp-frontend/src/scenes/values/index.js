import React, { Component } from 'react';
import {
  Values
} from 'redux-form-website-template'

export default class DisplayValues extends Component {
	render() {
		return(
		<Values form="wizard" />
		)
	}
}