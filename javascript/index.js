
function sendData(){
          firebase.database().ref("users/").set({
              email: document.getElementById("email_field"),
              pass: document.getElementById("pass_field")
          });
}
