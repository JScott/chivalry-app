function randomBetween(a, b) {
  return Math.floor((Math.random() * b) + a);
}

function updateLoader(percentage) {
  var loadingElement = document.getElementsByTagName('div')[0];
  loadingElement.innerText = 'Audio Loading: '+percentage+'%...\nResponse times are better when the audio is fully loaded.';
  if (percentage == 100) loadingElement.hidden = true;
}

function initializeButton() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var buttonSize = Math.min(width,height)*0.6;
  var buttonElement = document.getElementsByTagName('img')[0];

  buttonElement.style.width = buttonSize+'px';
  buttonElement.style.height = buttonSize+'px';
  buttonElement.style.position = 'absolute';
  buttonElement.style.left = (width-buttonSize)/2+'px';
  buttonElement.style.top = (height-buttonSize)/2+'px';
}

function updateButton(percentage) {
  var buttonElement = document.getElementsByTagName('img')[0];
  buttonElement.style.opacity = 0.5+(percentage/50);
}

function preload(warcries) {
  var totalAnimated = 67;
  var totalMobile = 63;

  function loadWarcries(type, index) {
    var path = 'audio/'+type+'/'+index+'.ogg'
    var warcry = new Audio(path);
    warcry.addEventListener('canplaythrough', function() {
      warcries.push(warcry);
      var percentage = (warcries.length/(totalAnimated+totalMobile)*100).toFixed(2);
      updateLoader(percentage);
      updateButton(percentage);
    }, false);
  }

  for (var i = 1; i <= totalAnimated; i++) {
    loadWarcries('animated', i);
  }
  for (var i = 1; i <= totalMobile; i++) {
    loadWarcries('mobile', i);
  }
}

window.onload = function() {
  initializeButton();

  var warcries = [];
  preload(warcries);

  document.addEventListener("click", function() {
    var warcry = warcries[randomBetween(0,warcries.length-1)];
    warcry.play();
  });
}
