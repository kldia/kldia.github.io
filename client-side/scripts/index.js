
document.getElementById("notify").onclick = function() {ajaxcall()};


function ajaxcall(){
   // GET FORM DATA
  var data = new FormData();
  data.append("email", document.getElementById("mail-input").value);
   // AJAX CALL
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "server-side/mailer.php");

  document.getElementById("mail-input").value = '';

  xhr.onload = function () {
    console.log(this.response);
    xhr.send(data);
    // PREVENT FORM SUBMIT (RELOAD PAGE)
    return false;
 }
}
