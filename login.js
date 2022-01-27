function login(){
  location.href="home.html";
  // let uname = $('#uname').val();
  // let upass = $('#upass').val();
  // if(uname == "user" && upass == "nopass123"){
  //   location.href="home.html";
  //   document.cookie = `username=${uname}; path=/`;
  // }else{
  //   alert("Wrong Combination of Username & Password");
  // }
}

function getCookie(uname){
  var uname = uname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var dc = decodedCookie.split(';');
  for(var i = 0; i < dc.length; i++) {
    var c = dc[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(uname) == 0) {
      return c.substring(uname.length, c.length);
    }
  }
  return "";
}

function valid(){
    var uname = getCookie("username");
    if (uname != "" || uname != null) {
      location.href = "home.html";
    } else { 
        return 0;
    }
}