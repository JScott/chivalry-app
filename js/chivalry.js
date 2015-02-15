window.onload = function() {
  var width = window.screen.width;
  var height = window.screen.height;
  var buttonSize = Math.min(width,height)*0.6;
  var buttonElement = document.getElementsByTagName('img')[0];
  
  buttonElement.style.width = buttonSize+'px';
  buttonElement.style.height = buttonSize+'px';
  buttonElement.style.position = 'absolute';
  buttonElement.style.left = (width-buttonSize)/2+'px';
  buttonElement.style.top = (height-buttonSize)/2+'px';


  document.addEventListener("click", function() {
    //alert(button.width);
  });
}