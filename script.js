const form =document.querySelector("#create-account-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput=document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");


form.addEventListener("submit",(event) =>{


    validateForm();
    if(isFormValid() == true){
        form.submit();
    }
    else{
        
    event.preventDefault();
    }

});


function isFormValid(){
    const inputContainers = form.querySelectorAll(".input-group");
    let result = true;
    inputContainers.forEach((container)=>{
if(container.classList.contains('error')){
    result = false;
}
});
return result;
}




function validateForm(){

    //username

    if (usernameInput.value.trim()=='') {

        setError(usernameInput, '*Name required');
    }
    else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length >15){

        setError(usernameInput,'Name  must be min 5 and max 15 character');
    }
    else{
        setSuccess(usernameInput);
    }
    //email

if(emailInput.value.trim() == ''){

    setError(emailInput, '*Email required')
}
else if(isEmailValid(emailInput.value))
{
setSuccess(emailInput);
}
else{
    setError(emailInput,' provide valid email address')
}

    //password


    if(passwordInput.value.trim() == ''){

        setError(passwordInput,'*Password required');
    }
    else if(passwordInput.value.length <6 ||passwordInput.value.trim().length >20){
         setError(passwordInput,"password min 6 and max 20 characters");
    }

    else{

        setSuccess(passwordInput);
    }
    //confirm password
   

    if(confirmPassword.value.trim() == ''){

        setError(confirmPassword,' *password required ')
    }
    else if(confirmPassword.value !== passwordInput.value){

        setError(confirmPassword , 'password does not match');
    
    }
    else{

        setSuccess(confirmPassword);
    }
    //mobile number
    if(mobileNumber.value.trim() == ''){

        setError(mobileNumber,'* mobile number required');
    }
    else if(mobileNumber.value.length <10 ){
         setError(mobileNumber,"provide valid number");
    }

    else{

        setSuccess(mobileNumber);
    }
    //dob

    if(dateofBirth.value.trim() == ''){

        setError(dateofBirth,'*DOB required');
    }
    else if(dateofBirth.value.length >15 ){
         setError(dateofBirth,"provide DOB");
    }

    else{

        setSuccess(dateofBirth);
    }
  //gender
  if(gender.value.trim() == ''){

    setError(gender,'*Gender required');
}
else if(gender.value.length >6 ){
     setError(gender,"provide  gender");
}

else{

    setSuccess(gender);
}
//state
if(state.value.trim() == ''){

    setError(state,'*state required');
}
else if(state.value.length >20 ){
     setError(state,"provide state");
}

else{

    setSuccess(state);
}
 



//address
if(addressInput.value.trim() == ''){

    setError(addressInput,'* Address required');
}
else if(addressInput.value.length <0 ){
    setError(addressInput,"provide valid address");
}
else{

    setSuccess(addressInput);
}













    
   
    

   


   
   



}
function setError(element, errorMessage){


    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;

   
}

function setSuccess(element){

    const parent = element.parentElement;
    if (parent.classList.contains('error')) {

        parent.classList.remove('error');
    }
    parent.classList.add('success');
   
 
}


function isEmailValid(email){

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
}


