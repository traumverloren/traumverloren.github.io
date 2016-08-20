
var colors = ['Aqua', 'Gold', 'Aquamarine', 'Tomato', 'SpringGreen', 'DeepPink', 'DodgerBlue', 'Chartreuse'];

function randomBackgroundColor() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  console.log("OH HAI");
}

setInterval(randomBackgroundColor, 2000);
