function randomBetween(a, b) {
  return Math.floor((Math.random() * b) + a);
}

window.onload = function() {
  var width = window.screen.width;
  var height = window.screen.height;
  var buttonSize = Math.min(width,height)*0.6;
  var loadingElement = document.getElementsByTagName('div')[0];
  var buttonElement = document.getElementsByTagName('img')[0];

  buttonElement.style.width = buttonSize+'px';
  buttonElement.style.height = buttonSize+'px';
  buttonElement.style.position = 'absolute';
  buttonElement.style.left = (width-buttonSize)/2+'px';
  buttonElement.style.top = (height-buttonSize)/2+'px';

  var warcries = [];
  //loadAudioTo(warcries);
  for (var i = 1; i <= 67; i++) {
    (function(index) {
      var type = 'animated';
      var path = 'audio/'+type+'/'+index+'.ogg'
      var warcry = new Audio(path);
      warcry.addEventListener('canplaythrough', function() {
        warcries.push(path);
        loadingElement.innerText = (warcries.length/67*100)+'%';
        if (loadingElement.innerText == '100%') loadingElement.hidden = true;
      }, false);
    })(i);
  }

  document.addEventListener("click", function() {
    if (warcries.length == 0) {
      alert("Loading audio, please try again soon...");
      return;
    }
    var random = randomBetween(0,warcries.length-1);
    var warcryPath = warcries[random];
    var warcry = new Audio(warcryPath);
    warcry.play();
  });
}