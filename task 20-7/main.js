            
             // firstName.lastName
             function validateForm() {
             var firstName = document.forms["registrationForm"]["firstName"].value;
             var lastName = document.forms["registrationForm"]["lastName"].value;
             var nameRegex = /^[A-Za-z]+$/;
             if (!nameRegex.test(firstName)) {
                alert("First name should contain only letters.");
                return false;
             }

             if (!nameRegex.test(lastName)) {
                alert("Last name should contain only letters.");
                 return false;
             }
        }



             //birthDate
             function validateForm() {
             var birthDate = document.forms["registrationForm"]["birthdate"].value;
             var currentDate = new Date();
             var birthDateObj = new Date(birthDate);
             if (isNaN(birthDateObj.getTime())) {
                alert("Invalid birth date. Please enter a valid date.");
                return false;
             }

             if (birthDateObj >= currentDate) {
                alert("Birth date must be in the past.");
                return false;
             }
        }


             //email
             function validateForm(){
             var email = document.forms["registrationForm"]["email"].value;
             var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            
             if (!emailRegex.test(email)) {
                showError("Invalid email address. Please enter a valid email.");
                return false;
             }
        }

             function showError(errorMessage) {
             var errorElement = document.getElementById("error-message");
             errorElement.innerText = errorMessage;
        }

             function validateForm() {
             var email = document.forms["registrationForm"]["email"].value;
             var emailConfirmation = document.forms["registrationForm"]["emailConfirmation"].value;

             if (email !== emailConfirmation) {
             showError("Email confirmation does not match.");
             return false;
             }
        }         
             function showError(errorMessage) {
             var errorElement = document.getElementById("error-message");
             errorElement.innerText = errorMessage;
        }  




        
             //mobileNumber
             function validateForm() {
             var mobileNumber = document.forms["registrationForm"]["mobileNumber"].value;
             var mobileNumberRegex = /^\d{10}$/;
 
             if (!mobileNumberRegex.test(mobileNumber)) {
             showError("Mobile number should be exactly 10 digits.");
             return false;
             }

        }
             function showError(errorMessage) {
             var errorElement = document.getElementById("error-message");
             errorElement.innerText = errorMessage;
        }





             //password
             function validateForm() {  
                var password = document.forms["registrationForm"]["password"].value;
                var passwordConfirmation = document.forms["registrationForm"]["passwordConfirmation"].value;
                var passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
   
                if (!passwordRegex.test(password)) {
                showError("Password must start with a capital letter, have at least two numbers, one special character, and be 8 to 32 characters long.");
                return false;
                }
           }
   
                if (password !== passwordConfirmation) {
                showError("Password confirmation does not match.");
                return false;
           }
   
                function showError(errorMessage) {
                var errorElement = document.getElementById("error-message");
                errorElement.innerText = errorMessage;
           }



                // local storeg 
                function validateForm() {
                saveDataToLocalStorage();
   
                return true;
           }
           
                function saveDataToLocalStorage() {
                var firstName = document.forms["registrationForm"]["firstName"].value;
                var lastName = document.forms["registrationForm"]["lastName"].value;
                var birthDate = document.forms["registrationForm"]["birthdate"].value;
                var email = document.forms["registrationForm"]["email"].value;
                var mobileNumber = document.forms["registrationForm"]["mobileNumber"].value;
                var password = document.forms["registrationForm"]["password"].value;

                var userData = {
                firstName: firstName,
                lastName: lastName,
                birthDate: birthDate,
                email: email,
                mobileNumber: mobileNumber,
                password: password
                };
                
                localStorage.setItem('userData', JSON.stringify(userData));

     }
