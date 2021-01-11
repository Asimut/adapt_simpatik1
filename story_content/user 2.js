function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fLxSM33ImI":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
 
var myName = lmsAPI.GetStudentName();

var array = myName.split(' ');
 
// variables for JavaScript

var Name = array[1];
 
// variables in Storyline set to variables from JS above
player.SetVar("Name", Name);
}

