let userName = prompt("Please Enter Your Name: ");

if(userName.match(/[0-9]/)){
  alert("Username Should contain only characters");
}
else if(typeof userName === null){
  alert("incorrrect use only alphabets");
}
else {
  alert("done");
}
console.log(typeof userName)
let passWord = prompt("Please Enter a Password:");
let confirm = prompt("Confirm Your Password:");

if(passWord === confirm){
  // document.write(`Wellcome ${userName}`);
  alert("welcome " +userName +" You Have Successfully made an account :)");
  
let uName = prompt("Enter User name:");
let pswrd = prompt("Enter password to login:");

if(uName===userName && pswrd===passWord){
    document.write("<h2>Congrates</h2> "+uName+" <h2>sucessfully logged in<h2/>"+" :)");

  }
  else{
    document.write("<h2>Sorry User name or Password incorrect! Try Again :(</h2>");
    alert("User name does not match");
  }
}else{
  alert("sorry your password is incorrect try again :( ");
}
