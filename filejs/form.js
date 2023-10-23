var btnSignup = document.querySelector(".btn-signup");
var usernameSignup = document.querySelector(".user-name");
var passwordSignup = document.querySelector(".pass-word");
var clickSignup = document.querySelector(".click-signup");
var clickLogin = document.querySelector(".click-login");
var loginBody = document.querySelector(".login-body");
var loginSignup = document.querySelector(".signup-body");
var btnLogin = document.querySelector(".btn-login");
var usernameLogin = document.querySelector(".username");
var passwordLogin = document.querySelector(".password");
clickSignup.addEventListener('click',function(){
    clickSignup.style.background = "blue";
    clickSignup.style.color = "white";
    clickLogin.style.background = "white";
    clickLogin.style.color = "black";
    loginSignup.classList.add("showSignup");
    loginBody.classList.remove("showLogin");

});
clickLogin.addEventListener('click',function(){
    clickLogin.style.background = "blue";
    clickLogin.style.color = "white";
    clickSignup.style.background = "#fff";
    clickSignup.style.color = "black";
    loginSignup.classList.remove("showSignup");
    loginBody.classList.add("showLogin");
});
btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (usernameLogin.value === "" || passwordLogin.value === "") {
      alert("vui lòng không để trống");
    } 
    else {
        alert("Đăng Nhập Thành Công");
        window.location.href = "./quanlisach.html";
    }
  });

btnSignup.addEventListener("click", (e) => {
    e.preventDefault();
    if (usernameSignup.value === "" || passwordSignup.value === "") {
      alert("vui lòng không để trống");
    } 
    else {
        alert("Đăng Ký Thành Công");
        loginSignup.classList.remove("showSignup");
        loginBody.classList.add("showLogin");
        clickLogin.style.background = "blue";
        clickLogin.style.color = "white";
        clickSignup.style.background = "#fff";
        clickSignup.style.color = "black";
    }
  }); 