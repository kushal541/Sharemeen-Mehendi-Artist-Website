// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateRegForm() {
    // Retrieving the values of form elements 
    var name = document.registerForm.uname.value;
	var email = document.registerForm.remail.value;
	var pass = document.registerForm.psw.value;
	var repass = document.registerForm.repeat.value;
   
    
	   
    
    		
	// Defining error variables with a default value
    var unameErr  = remailErr = pswErr = repeatErr =  true;
	
	
	

	
	
    
    // Validate name
    if(name == "") {
        printError("unameErr", "Please enter a username");
    } else {
        var regex = /^[a-zA-Z\s][a-zA-Z0-9\s,-]+$/;                
        if(regex.test(name) === false) {
            printError("unameErr", "Please enter a valid username");
        } else {
            printError("unameErr", "");
            unameErr = false;
        }
    }
    
	// Validate email address
    if(email == "") {
        printError("remailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("remailErr", "Please enter a valid email address");
        } else{
            printError("remailErr", "");
            remailErr = false;
        }
    }
    
	// Validate password
    if(pass == "") {
        printError("pswErr", "Please enter a password");
    } else {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,6}$/;                
        if(regex.test(pass) === false) {
            printError("pswErr", "Password should be of 6 characters including one uppercase letter, one lowercase letter, and one number. ");
        } else {
            printError("pswErr", "");
            pswErr = false;
        }
    }
	
	// Validate repeat password
	    if ( repass == "" ) { 
		   printError("repeatErr", "Please re-enter your password");
    } else {
                        
        if(repass != pass) {
            printError("repeatErr", "Your passwords do not match");
        } else {
            printError("repeatErr", "");
            repeatErr = false;
        }
    }
	
	    
   
    
    // Prevent the form from being submitted if there are any errors
    if((unameErr || remailErr || pswErr || repeatErr) == true) {
       return false;
    } 
};