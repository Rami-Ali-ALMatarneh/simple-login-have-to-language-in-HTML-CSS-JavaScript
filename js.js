let arabic = document.querySelector(".arabic");
let english = document.querySelector(".english");
let P = document.querySelector(".text p");
let login = document.querySelector(".login");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let formtext = document.querySelector(".form-text");
let checkBox = document.querySelector(".form-check-label");
let btnprimary = document.querySelector(".btn-primary");
arabic.onclick = function () {
  addLanguage("arabic");
  localStorage.setItem("language", "arabic");
};
english.onclick = function () {
  addLanguage("english");
  localStorage.setItem("language", "english");
};
window.onload = function () {
  addLanguage(localStorage.getItem("language"));
};
function addLanguage(element) {
  if (element === "english") {
    P.innerHTML = `what you are waiting for? Start your coding journey today and open
            up a world of endless possibilities! Everything you need to learn
            programming in opsCode59`;
    login.innerHTML = "LOGIN";
    email.innerHTML = "Email address";
    password.innerHTML = "Password";
    formtext.innerHTML = "We'll never share your email with anyone else.";
    checkBox.innerHTML = "Check me out";
    btnprimary.innerHTML = "Login";
  } else if (element === "arabic") {
    P.innerHTML =
      "ما كنت تنتظر؟ ابدأ رحلة البرمجة اليوم وافتح عالماً من الاحتمالات اللانهائية! كل ما تحتاجه لتعلم البرمجة في opsCode59";
    login.innerHTML = "تسجيل الدخول";
    email.innerHTML = "البريد الإلكتروني";
    password.innerHTML = "كلمة المرور";
    formtext.innerHTML = "لن نشارك بريدك الإلكتروني مع أي شخص آخر.";
    checkBox.innerHTML = "تفقدني";
    btnprimary.innerHTML = "تسجيل";
  }
}
