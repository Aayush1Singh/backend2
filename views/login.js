const loginButton = document.querySelector(".buttonLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");
let data = {};
loginButton.addEventListener("click", function () {
  const user = username.value;
  // console.log(user);
  const password1 = password.value;
  // console.log(password1);
  data = {
    userName: user,
    password: password1,
  };
});
export { data };
