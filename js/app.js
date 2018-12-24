/*
***ATM SYSTEM***
*/

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
  alert("welcome " +userName +" You Have Successfully made an account :)"); 
let uName = prompt("Enter User name:");
let pswrd = prompt("Enter password to login:");
document.write("<h2>CONGRATES "+uName+" sucessfully logged in :) <h2/>");

if(uName===userName && pswrd===passWord){
  let amount = +prompt("Enter your amount ranging 500 to 50000");
  let userData=[500,1000,5000,10000,15000,20000,25000,30000,35000,40000,45000,50000];
  let error=[];
  // if(userData.includes(amount)){
    //   document.write("You have transacted amount Rs: "+ amount);
    // }
    // else{
      //   document.write("But!"+"You can transact amount only in 500, 10000, 15000,20000, 30000 or 50000");
      // }
  for(let i=0;i<userData.length;i++){    
  if(userData[i]===amount){
    document.write("You have transacted amount Rs: "+ amount);
    break;
  }
  else{
    error.push("<h1>But!</h1>"+"<h2>You can transact amount only in 500, 10000, 15000,20000, 30000 or 50000</h2>");
  }
} 
      //if(amount==userData[i]){
        // while(a==userData[i]){
        //   document.write("You have transacted amount Rs: "+amount);
        //   break;
        // }

    
      // }else{
      //   document.write("But!"+"You can transact amount only in 500, 10000, 15000,20000, 30000 or 50000");  
      //   break;
      //   }
  if(error.length == userData.length ){
    document.write("<h1>But!</h1>"+"<h2>You can transact amount only in 500,1000,5000,10000,15000,20000,25000,30000,35000,40000,45000,50000 try again!</h2>");
  }
  }
else{
  document.write("<h2>Sorry User name or Password incorrect! Try Again :(</h2>");
  alert("User name or password does not match");
}
}
else{
  alert("sorry your password is incorrect try again :( ");
}