import React from 'react'
import {Link} from 'react-router-dom'


export default class RegistrationForm extends React.Component{
    constructor(props){
	super(props)
	this.state = {
	    firstName : React.createRef(),
	    lastName : React.createRef(),
    	    email : React.createRef(),
	    password : React.createRef(),
	    confirmPass : React.createRef(),
	}
    }

    render(){
	return (
	    <div>
	      <form>
		
		<label for="fname">First Name:</label>
		<input type="text" id="fname"/><br></br>
		
		<label for="lname">Last Name:</label>
		<input type="text" id="lname"/><br></br>

		<label for="emailId">Email ID:</label>
		<input type="text" id="emailId"/><br></br>

		<label for="psswd">Password:</label>
		<input type="text" id="psswd"/><br></br>

		<label for="cnfrpswd">Last Name:</label>
		<input type="text" id="Confirm Password"/><br></br>
		
		<input type="submit" value="Sign Up"/>
	      </form>
		
 
	      <Link to = "/login">Sign in instead</Link>
	    </div>
	)
    }
}
