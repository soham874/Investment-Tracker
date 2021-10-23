import React from 'react'

export deafult class LoginPage extends React.Component{

    constructor(props){
	super(props)
	this.state = {
	    userName: React.createRef(),
	    password: React.createRef()
	}
    }

    render(){
	return{
	  
  
		<form>
		<label for="fname">User Name:</label>
		<input type="text" id="uname"><br><br>
		<label for="lname">Password:</label>
		<input type="text" id="pswd"><br><br>
		<input type="submit" value="Submit">
		</form>

 
		<a href="url">Forgot Password</a>

		<a href="url">Sign Up</a>

 
	      
	}
    }

}
