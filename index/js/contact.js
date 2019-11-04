// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
	var address = document.contactForm.address.value;    
    
    		
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = addErr =  true;
	
	
	

	
	
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[5]+[1-9]\d{6}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 8 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
	// Validate address
    if(address == "") {
        printError("addErr", "Please enter your address");
    } else {
        var regex = /^[a-zA-Z0-9\s][a-zA-Z0-9\s,-]+$/;                 
        if(regex.test(address) === false) {
            printError("addErr", "Please enter a valid address");
        } else {
            printError("addErr", "");
            addErr = false;
        }
    }
	    
   
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || addErr ) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
						  "Address: " + address + "\n";
                          
						  
        
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};