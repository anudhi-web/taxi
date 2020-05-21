function validation(){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var massage=document.getElementById("massage").value;
  var error_massage=document.getElementById("error_massage");
  var text;

  error_massage.style.padding="10px";

  if (name.length <5){
      text="Please Enter Valid Name";
      error_massage.innerHTML =text;
      return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6){
    text="Please Enter Valid Email";
    error_massage.innerHTML =text;
    return false;
 
}
if (massage.length <= 50){
    text="Please Enter More Than 50 Characters";
    error_massage.innerHTML =text;
    return false;

}
alert ("Form Submitted Successfull")
return true;

}
