function myFunction(){  
  if(document.getElementById("first").value==""){
    alert("Please enter your information in the blank");
    return false; 
  }
  else
  if(document.getElementById("last").value==""){
    alert("Please enter your information in the blank");
    return false; 
  }
  else
  if(document.getElementById("english").value==""){
    alert("Please enter your information in the blank");
    return false; 
  }
  else
  if(document.getElementById("number").value==""){
    alert("Please enter your information in the blank");
    return false; 
  }
  else
  var number =document.getElementById("number").value;
    if(isNaN(number)){
      alert("Please enter a number in the phone number");
    }
    else{location.href="mailto:chouc@hotmail.com"}
}
