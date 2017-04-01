var score = 0;
var idk = 0;
var newScore;
function answer()
{
  var answerEntered = document.getElementById("myNumber").value;
  if (answerEntered == 8)
  {
  document.getElementById("numberError").innerHTML="Correct answer";
  newScore = score + 1;
  newScore=Number(newScore);
  idk = newScore;
  setCookie("daScore", idk , 1);
  }
  else if (isNaN(answerEntered))
  {
  document.getElementById("numberError").innerHTML="Please enter in a number";
  }
  else
  {
  document.getElementById("numberError").innerHTML="Incorrect answer";
  }
}
function answer2()
{
  var answerEntered = document.getElementById("myNumber").value
  if (answerEntered == 40)
  {
    document.getElementById("newError").innerHTML="Correct answer";
    newScore =  score + 1;
    newScore=Number(newScore);
    idk = newScore;
    setCookie("daScore", idk , 1);
  }
  else if (isNaN(answerEntered))
  {
    document.getElementById("newError").innerHTML="Please enter in a number";

  }
  else
  {
    document.getElementById("newError").innerHTML="Incorrect answer";
}
}
function answer3()
{
  var answerEntered = document.getElementById("myNumber").value
  if (answerEntered == 50)
{
  document.getElementById("numberError").innerHTML="Correct answer";
  newScore = score + 1;
  newScore=Number(newScore);
  idk = newScore;
  setCookie("daScore", newScore , 1);
}
  else if (isNaN(answerEntered))
{
  document.getElementById("numberError").innerHTML="Please enter in a number";

}
else
{
  document.getElementById("numberError").innerHTML="Incorrect answer";
}
}
function yourScore()
{
  var lastScore;
  var yourScore;
  var endScore = getCookie("daScore");
  endScore = Number(endScore);
  yourScore = endScore / 3;
  yourScore = Number(yourScore);
  lastScore = yourScore * 100;
  document.getElementById("tot").innerHTML = (lastScore);
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
}
}
