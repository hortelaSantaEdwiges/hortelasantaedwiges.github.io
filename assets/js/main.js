const loader = document.getElementById("loader");
const login = document.getElementById("login");
const app = document.getElementById("app");

const menuButton = document.getElementById("menuButton");
const pedidosButton = document.getElementById("pedidosButton");

window.addEventListener("load", function() {
  setTimeout(() => {
    loader.classList.add("hidden"); // class "loader hidden"

    test();
  }, 500);
});

var buttonLogin = document.getElementById("buttonLogin");
buttonLogin.addEventListener("click", () => {
  var user = document.getElementById("user");
  var pass = document.getElementById("pass");

  if (user.value == "test" && pass.value == "test") {
    // test
  }
});

function test() {
  login.classList.add("fadeout");

  setTimeout(() => {
    login.classList.add("hidden"); // class "loader hidden"
    document.getElementById("app").classList.remove("hidden");
  }, 500);
}

menuButton.addEventListener("click", () => {
  console.log("it works");
});
