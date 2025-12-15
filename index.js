// name prompt


function nameValidation(){
let x = prompt("Enter Full Name: Firstname , Lastname ");

if(x===null){
    return;
}


while (x.split(" ").length < 2){
    x = prompt(" please Enter Full Name ");
    if(x===null){
    return;
}

}
alert("Name entered correctly!")


}

nameValidation()





// email prompt

function emailValidation() {

let email = prompt("Enter Email Address");
let emailPattern =/^\w+@gmail\.com$/;

 if(email === null){
        return;
    }

    while (!emailPattern.test(email)){
     email = prompt("Please Enter Correct Email ");
     if(email === null){
        return;
    }
   } 
   alert(" email entered correctly ");
    
         
}
  emailValidation()  

//password
let password;

function passwordValidation() {

 password = prompt("Enter Password");
let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()+_]).{8,}$/;

if(password === null){
    return;
}

while (!passwordPattern.test(password)) {
  password = prompt( "Enter correct password");

  if(password=== null){
    return;
}
}
alert("Password entered correctly!");

}

// confirm password 

function passwordConfirmation() {
let  confirmpassword = prompt("Confirm Password");

if ( confirmpassword=== null){
    return;
}
while( confirmpassword !== password ){
     confirmpassword= prompt("ReConfirm Password");
if ( confirmpassword === null){
    return;
}
}
alert("password confirmed!");


}
passwordValidation()
passwordConfirmation() 
 

// age

 function ageValidation(){

let input= prompt("Enter your age");
 if(input===null){
     return;
}
let age = Number(input);
if (isNaN(age)){
    alert("please enter a number");
    return;
}

 if (age < 18 ) {

    alert("sorry you must be an adult");
  return;
}
alert("adult");
    
 }



    

ageValidation()