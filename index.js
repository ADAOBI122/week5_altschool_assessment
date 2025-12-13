// name prompt

let x = prompt("Enter Full Name ");

while (!x || x.split(" ").length < 2  ) {
    x = prompt(" Please Enter Full Name ");
}
 alert("Name  entered correctly");

// email prompt

let email = prompt("Enter Email Address");
let emailPattern =/^\w+@gmail\.com$/;

while (!emailPattern.test(email) ){
 email = prompt("Enter Correct Email ");
}
 alert("email entered correctly");

//password

let password = prompt("Enter Password");
let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()+_]).{8,}$/;

while (!passwordPattern.test(password)) {
  password = prompt( "Enter correct password");
  
}
alert("Password entered correctly!");

// age

let input= prompt("Enter your age");
let age =Number( input);

if (age < 18 ){
    alert("child");
    
}else{
    alert("adult");
}
