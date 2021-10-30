import React from 'react'
import {Link} from 'react-router-dom'

export default class LoginPage extends React.Component{

    constructor(props){
	super(props)
	this.state = {
	    userName: React.createRef(),
	    password: React.createRef()
	}
    }

    render(){
	return (
	  
 		<div> 
		<form>
		<label for="fname">User Name:</label>
		<input type="text" id="uname"/><br></br>
		<label for="lname">Password:</label>
		<input type="text" id="pswd"/><br></br>
		<input type="submit" value="Submit"/>
		</form>

		<Link to="/registration">Sign Up</Link>
    <Link to="/forgotpassword">Forgot Password</Link>
		</div>
 
	      
	)
    }

}
