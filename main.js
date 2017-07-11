// Initiate a Service Worker to cache it!
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(reg) {
    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

var randomize = function () {
  window.setInterval(randomBackgroundColor, 500);
}

var colors = ['Aqua', 'Gold', 'Aquamarine', 'Tomato', 'SpringGreen', 'DeepPink', 'DodgerBlue', 'Chartreuse'];
function randomBackgroundColor() {
  var style = document.getElementById('stylesheet').getAttribute('href');

  if (style === "css/main.css") {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    console.log("OH HAI");
  }
}

function swapStyleSheet() {
  var style = document.getElementById('stylesheet').getAttribute('href');
  if (style === "css/main.css") {
	 document.getElementById('stylesheet').setAttribute('href', 'css/geolize.css');
   document.getElementById('btn').innerHTML = 'Get me outta here';
   document.getElementById('job-title').innerHTML = 'InterWebz Developer';
   clearInterval(randomize);
  } else {
  	document.getElementById('stylesheet').setAttribute('href', 'css/main.css');
    document.getElementById('btn').innerHTML = 'CSS like it\'s 1996';
    document.getElementById('job-title').innerHTML = 'Web Developer';

  }
  document.getElementById('btn').blur();
}

randomize();
