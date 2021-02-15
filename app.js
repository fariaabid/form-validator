const form = document.getElementById("form");
const userName = document.getElementById("username");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector("small");
    small.innerText = message;
}
// show success outline
function showSuccess (input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value.trim())){
    showSuccess(input);
   }
   else{
      showError(input, "Email is not valid");
   }
}

// Check Required field
function checkRequired (inputArr){
    inputArr.forEach(function (input) {
        // console.log(input.value);
        if(input.value.trim() === ''){
            // console.log(input.id);
            showError(input, `${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    });
}


// check input function
function checkLength(input,min,max){
    if(input.value.length <min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}


// check password match

function checkPasswordMatch(input1,input2) {
    if(input1.value != input2.value){
        showError(input2, "Password do not match")
    }
}

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// event listener
form.addEventListener('submit',function(e){
    e.preventDefault();
     
    checkRequired([userName,emailAddress,password,confirmPassword]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(emailAddress);
    checkPasswordMatch(password,confirmPassword);
    // checkRequired(userName);
    // checkRequired(emailAddress);
    // checkRequired(password);
    // checkRequired(confirmPassword);


    // hey....wait...read it:
    // manual code is here and the updated one is the upper section
    // // console.log(userName.value);
    // if (userName.value === '') {
    //     // alert("put a valid name")
    //     showError(userName,"User name is required");
    // }
    // else{
    //     showSuccess(userName);
    // }
    // if (emailAddress.value === '') {
    //     // alert("put a valid name")
    //     showError(emailAddress,"Email Address is required");
    // }
    // else if(!isEmailValid(email.value)){
    //     showError(emailAddress,"Email Address is not valid");
    // }
    // else{
    //     showSuccess(emailAddress);
    // }
    // if (password.value === '') {
    //     // alert("put a valid name")
    //     showError(password,"Password is required");
    // }
    // else{
    //     showSuccess(password);
    // }
    // if (confirmPassword.value === '') {
    //     // alert("put a valid name")
    //     showError(confirmPassword,"Confirm Password is required");
    // }
    // else{
    //     showSuccess(confirmPassword);
    // }
})