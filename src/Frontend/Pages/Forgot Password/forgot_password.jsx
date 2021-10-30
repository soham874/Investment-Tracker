import React from 'react'
import {Link} from 'react-router-dom'

export default class ForgotPassword extends React.Component {
	constructor(props) {
		super(props) 
		this.state = {
			email : React.createRef()
		}
	}
	render() {
		return (
		<div>
		<form>
    <label for="email_id">Enter email Id:</label>
		<input type="text" id="email_id"/><br></br>
		
		<input type="submit" value="Send Reset Link"/>
		</form>
		</div>
	);
	}
}
