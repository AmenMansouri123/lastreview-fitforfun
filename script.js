// LOGIN FORM

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Welkom terug bij FitForFun 💪");

});

}



// REGISTER FORM

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", function(e){

e.preventDefault();

const message = document.getElementById("message");

message.innerHTML = "✅ Account aangemaakt! Check jouw email om je account te bevestigen.";

message.style.color = "green";

registerForm.reset();

});

}



// SWITCH NAAR REGISTER

const showRegister = document.getElementById("showRegister");

if(showRegister){

showRegister.addEventListener("click", function(){

document.getElementById("loginBox").style.display = "none";

document.getElementById("registerBox").style.display = "block";

});

}



// TERUG NAAR LOGIN

const backLogin = document.getElementById("backLogin");

if(backLogin){

backLogin.addEventListener("click", function(){

document.getElementById("registerBox").style.display = "none";

document.getElementById("loginBox").style.display = "block";

});

}



// RESERVERING FORM

const reserveForm = document.querySelector("#reserveForm");

if(reserveForm){

reserveForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Je reservering is succesvol verstuurd!");

});

}