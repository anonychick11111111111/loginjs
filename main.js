function signup(e) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var user = {
    username: username,
    email: email,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert('Đăng kí thành công');
}

function login(e) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  console.log(username)
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if(username == data.username && email == data.email && password == data.password){
    alert('Đăng nhập thành công');
    window.location.href = "todolist.html";
  }
  else if(user == null) {
    alert('Đăng nhập thất bại!')
  }
  else{
    alert('Đăng nhập thất bại!')
  }
}