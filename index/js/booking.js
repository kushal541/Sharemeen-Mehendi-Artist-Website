// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateBookingForm() {
    // Retrieving the values of form elements 
    var name = document.bookingForm.bname.value;
    var email = document.bookingForm.bemail.value;
    var mobile = document.bookingForm.bmobile.value;
	var address = document.bookingForm.baddress.value;    
    var appointment = document.bookingForm.bappointment.value;
	var date = document.bookingForm.bdate.value;
	var occasion = document.bookingForm.boccasion.value;
    
	
    		
	// Defining error variables with a default value
    var bnameErr = bemailErr = bmobileErr = baddErr = bappErr = boccErr = bdateErr =  true;
	
	
	
        
        

var today = new Date();
var time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        if ( date == "" ) { 
		   printError("bdateErr", "Please select your date");
    } else {
                        
        if(date == time) {
            printError("bdateErr", "Please enter a good date");
        } else {
            printError("bdateErr", "");
            bdateErr = false;
        }
    }
		
		
	
	
    
    // Validate name
    if(name == "") {
        printError("bnameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("bnameErr", "Please enter a valid name");
        } else {
            printError("bnameErr", "");
            bnameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("bemailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("bemailErr", "Please enter a valid email address");
        } else{
            printError("bemailErr", "");
            bemailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("bmobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[5]+[1-9]\d{6}$/;
        if(regex.test(mobile) === false) {
            printError("bmobileErr", "Please enter a valid 8 digit mobile number");
        } else{
            printError("bmobileErr", "");
            bmobileErr = false;
        }
    }
    
	// Validate address
    if(address == "") {
        printError("baddErr", "Please enter your address");
    } else {
        var regex = /^[a-zA-Z0-9\s][a-zA-Z0-9\s,-]+$/;                
        if(regex.test(address) === false) {
            printError("baddErr", "Please enter a valid address");
        } else {
            printError("baddErr", "");
            baddErr = false;
        }
    }
	    
    // Validate appointment
    if(appointment == "") {
        printError("bappErr", "Please select your appointment type");
    } else {
        printError("bappErr", "");
        bappErr = false;
    }
	// Validate occasion
    if(occasion == "Select") {
        printError("boccErr", "Please select your occasion");
    } else {
        printError("boccErr", "");
        boccErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((bnameErr || bemailErr || bmobileErr || baddErr || bappErr || boccErr || bdateErr ) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
						  "Address: " + address + "\n"+
						  "Appointment Type: " + appointment + "\n"+
						  "Date: " + date + "\n"+
                          "Occasion: " + occasion + "\n" ;
                          
						  
       
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};