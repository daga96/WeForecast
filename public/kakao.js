function showRepeat(){
  var popup = document.getElementById("repeat");
  popup.classList.toggle("repeatClass--show");
}

function showCustom(){
  var popup = document.getElementById("custom");
  popup.classList.toggle("customClass--show");

}

function showDaily(){
  var popup = document.getElementById("daily");
  popup.classList.toggle("daily--show");
}

function closeFunction()
{
  
  var radioValue=document.querySelector('input[name="checkbox"]:checked').value
  console.log(radioValue)
  if (radioValue!="value"){
  document.querySelector('#chosenOption').innerHTML = radioValue;}
  document.querySelector('#repeat').setAttribute("class", "repeatClass")

 
}


function closeOptions()
{
  var checkValue="";
  var markedCheckbox = document.getElementsByName('check');  
  for (var checkbox of markedCheckbox) {  
    if (checkbox.checked)  
      checkValue+=checkbox.value + ' ';
  }  
  document.querySelector('#chosenOption').innerHTML = checkValue;
  document.querySelector('#custom').setAttribute("class", "customClass")
}
