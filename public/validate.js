var send = document.getElementById("submit");
send.addEventListener("click", formValidation);

function formValidation(){
  //Contact value
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var organisation = document.getElementById("organization").value;
  
  //Presentation value
  var lecture = document.getElementById("lecture").checked;
  var seminar = document.getElementById("seminar").checked;
  var discussion = document.getElementById("discussion").checked;
  var title = document.getElementById("title").value;
  var maxword = document.getElementById("message").value.length;

  //Email value
  var pattern =  /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  var isValid = pattern.test(email);

  //Contact validation
  if (firstname === "" || lastname === "" || email === "" || organization === "") {
    event.preventDefault();
    alert ("All contact inforamtion must be filled.");
    return false;
  }

  //Email validation
  if (isValid === false) {
    event.preventDefault();
    alert ("E-mail has wrong format.");
    return false;
  }

  //Title validation
  if ((lecture === true && title === "") || (seminar === true && title === "") || (discussion === true && title === "")) {
    event.preventDefault();
    alert ("Title of presentation must be filled.");
    return false;
  }
  
  //Message validation
  if (maxword > 200) {
    event.preventDefault();
    alert ("You can write max 200 words.");
    return false;
  }
}
