
function answer()
{
  var answerEntered = document.getElementById("myNumber").value;
  if (answerEntered == 8)
  {
  document.getElementById("numberError").innerHTML="Correct answer";
  var score;
  score=Number(score);
  newScore = score + 1;
  setCookie("daScore", newScore , 1);
  }
  else if (isNaN(answerEntered))
  {
  alert("Enter price as number");
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
    document.getElementById("numberError").innerHTML="Correct answer";
    var score;
    score=Number(score);
    newScore = score + 1;
    setCookie("daScore", newScore , 1);
  }
  else if (isNaN(answerEntered))
  {
    alert("Enter price as number");
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
  score=Number(score);
  newScore = score + 1;
  setCookie("daScore", newScore , 1);
}
  else if (isNaN(answerEntered))
{
  alert("Enter price as number");
}
else
{
  document.getElementById("numberError").innerHTML="Incorrect answer";
}
}
function yourScore()
{
  var yourScore;
  var endScore = getCookie("daScore");
  endScore = Number(endScore);
  yourScore = endScore / 3 * 100;
  document.getElementById("tot").innerHTML = (yourScore);
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
