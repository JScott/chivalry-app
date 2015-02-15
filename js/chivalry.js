function randomBetween(a, b) {
  return Math.floor((Math.random() * b) + a);
}

function randomFile(folder) {
  switch (folder) {
    case 'animated':
      return 'audio/animated/'+randomBetween(1,67)+'.ogg';
    case 'mobile':
      return 'audio/mobile/'+randomBetween(1,63)+'.ogg';
    default:
      return null;
  }
}

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
    var warcryType = randomBetween(1,2) == 1 ? 'animated' : 'mobile';
    var warcry = new Audio(randomFile(warcryType));
    warcry.play();
  });
}