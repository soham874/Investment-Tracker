import React from 'react'
import {Link} from 'react-router-dom'

export default class ForgotPassword extends React.Component {
	constructor(props) {
		super(props) 
		this.state = {
			NewPassword : React.createRef(),
      ConfirmPassword : React.createRef()
		}
	}
	render() {
		return (
		<div>
		<form>
    <label for="NewPassword">Enter New Password:</label>
		<input type="text" id="NewPassword"/><br></br>

    <label for="ConfirmPassword">Re-enter Typed Password:</label>
		<input type="text" id="ConfirmPassword"/><br></br>
		
		<input type="submit" value="Confirm"/>
		</form>
		</div>
	);
	}
}