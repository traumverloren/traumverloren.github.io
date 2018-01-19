// Initiate a Service Worker to cache it!
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js')
//   .then(function(reg) {
//     if(reg.installing) {
//       console.log('Service worker installing');
//     } else if(reg.waiting) {
//       console.log('Service worker installed');
//     } else if(reg.active) {
//       console.log('Service worker active');
//     }
//     // registration worked
//     console.log('Registration succeeded. Scope is ' + reg.scope);
//   }).catch(function(error) {
//     // registration failed
//     console.log('Registration failed with ' + error);
//   });
// }

// var svgString =
// '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:fi="http://pattern.flaticon.com/" x="0" y="0" width="100%" height="100%"><defs><g transform="matrix(0.32425081729888916 0 0 0.32425081729888916 93.99179077148438 17.991790771484375)" id="L1_0"><path d="M512,428.006H310.188c0-29.926-24.263-54.199-54.188-54.199c-29.936,0-54.199,24.273-54.199,54.199H0  c0-141.385,114.615-256,256-256S512,286.621,512,428.006z" fill="#fa496e"/><path d="M343.832,428.006h-33.646c0-29.926-24.263-54.199-54.188-54.199  c-29.936,0-54.199,24.273-54.199,54.199h-33.635c0-48.504,39.33-87.824,87.834-87.824S343.832,379.502,343.832,428.006z" fill="#a67eff"/><path d="M377.457,428.006h-33.625c0-48.504-39.33-87.824-87.834-87.824s-87.834,39.32-87.834,87.824h-33.625  c0-67.082,54.377-121.459,121.459-121.459S377.457,360.923,377.457,428.006z" fill="#52dbff"/><path d="M411.092,428.006h-33.635c0-67.082-54.376-121.459-121.459-121.459s-121.459,54.376-121.459,121.459  h-33.635c0-85.661,69.433-155.094,155.094-155.094S411.092,342.345,411.092,428.006z" fill="#00dcab"/><path d="M478.363,428.006h-33.635c0-104.229-84.49-188.729-188.729-188.729  c-104.229,0-188.729,84.501-188.729,188.729H33.633c0-122.807,99.558-222.365,222.365-222.365S478.363,305.199,478.363,428.006z" fill="#ff8522"/><path d="M444.727,428.006h-33.635c0-85.661-69.433-155.094-155.094-155.094s-155.094,69.433-155.094,155.094  H67.268c0-104.229,84.501-188.729,188.729-188.729C360.237,239.276,444.727,323.777,444.727,428.006z" fill="#ffdd00"/><path d="M256,145.643c-4.329,0-7.837-3.509-7.837-7.837V91.831c0-4.328,3.508-7.837,7.837-7.837  c4.329,0,7.837,3.509,7.837,7.837v45.976C263.837,142.134,260.329,145.643,256,145.643z" fill="#ff8522"/><path d="M374.725,171.749c-1.065,0-2.146-0.217-3.181-0.678c-3.955-1.76-5.734-6.391-3.976-10.346  l18.686-42.007c1.761-3.955,6.393-5.734,10.344-3.975c3.955,1.76,5.734,6.391,3.976,10.346l-18.686,42.007  C380.592,170.014,377.726,171.749,374.725,171.749z" fill="#52dbff"/><path d="M464.563,235.167c-2.035,0-4.07-0.788-5.604-2.358c-3.026-3.094-2.971-8.056,0.124-11.082  l32.874-32.142c3.095-3.026,8.058-2.97,11.081,0.125c3.026,3.094,2.971,8.056-0.124,11.082l-32.874,32.142  C468.516,234.424,466.538,235.167,464.563,235.167z" fill="#ffdd00"/><path d="M137.275,171.749c-3.001,0-5.865-1.735-7.164-4.654l-18.686-42.007  c-1.76-3.955,0.021-8.586,3.976-10.346c3.952-1.76,8.586,0.021,10.344,3.975l18.686,42.007c1.76,3.955-0.021,8.586-3.976,10.346  C139.421,171.53,138.339,171.749,137.275,171.749z" fill="#fa496e"/><path d="M47.437,235.167c-1.976,0-3.953-0.743-5.477-2.234L9.087,200.791  c-3.095-3.026-3.151-7.987-0.124-11.082c3.024-3.094,7.986-3.151,11.081-0.124l32.872,32.142c3.095,3.026,3.151,7.987,0.124,11.082  C51.506,234.379,49.473,235.167,47.437,235.167z" fill="#a67eff"/></g><g transform="matrix(0.3566727936267853 0 0 0.3566727936267853 -91.30823516845703 181.69176483154297)" id="L1_1"><path d="M512,428.006H310.188c0-29.926-24.263-54.199-54.188-54.199c-29.936,0-54.199,24.273-54.199,54.199H0  c0-141.385,114.615-256,256-256S512,286.621,512,428.006z" fill="#fa496e"/><path d="M343.832,428.006h-33.646c0-29.926-24.263-54.199-54.188-54.199  c-29.936,0-54.199,24.273-54.199,54.199h-33.635c0-48.504,39.33-87.824,87.834-87.824S343.832,379.502,343.832,428.006z" fill="#a67eff"/><path d="M377.457,428.006h-33.625c0-48.504-39.33-87.824-87.834-87.824s-87.834,39.32-87.834,87.824h-33.625  c0-67.082,54.377-121.459,121.459-121.459S377.457,360.923,377.457,428.006z" fill="#52dbff"/><path d="M411.092,428.006h-33.635c0-67.082-54.376-121.459-121.459-121.459s-121.459,54.376-121.459,121.459  h-33.635c0-85.661,69.433-155.094,155.094-155.094S411.092,342.345,411.092,428.006z" fill="#00dcab"/><path d="M478.363,428.006h-33.635c0-104.229-84.49-188.729-188.729-188.729  c-104.229,0-188.729,84.501-188.729,188.729H33.633c0-122.807,99.558-222.365,222.365-222.365S478.363,305.199,478.363,428.006z" fill="#ff8522"/><path d="M444.727,428.006h-33.635c0-85.661-69.433-155.094-155.094-155.094s-155.094,69.433-155.094,155.094  H67.268c0-104.229,84.501-188.729,188.729-188.729C360.237,239.276,444.727,323.777,444.727,428.006z" fill="#ffdd00"/><path d="M256,145.643c-4.329,0-7.837-3.509-7.837-7.837V91.831c0-4.328,3.508-7.837,7.837-7.837  c4.329,0,7.837,3.509,7.837,7.837v45.976C263.837,142.134,260.329,145.643,256,145.643z" fill="#ff8522"/><path d="M374.725,171.749c-1.065,0-2.146-0.217-3.181-0.678c-3.955-1.76-5.734-6.391-3.976-10.346  l18.686-42.007c1.761-3.955,6.393-5.734,10.344-3.975c3.955,1.76,5.734,6.391,3.976,10.346l-18.686,42.007  C380.592,170.014,377.726,171.749,374.725,171.749z" fill="#52dbff"/><path d="M464.563,235.167c-2.035,0-4.07-0.788-5.604-2.358c-3.026-3.094-2.971-8.056,0.124-11.082  l32.874-32.142c3.095-3.026,8.058-2.97,11.081,0.125c3.026,3.094,2.971,8.056-0.124,11.082l-32.874,32.142  C468.516,234.424,466.538,235.167,464.563,235.167z" fill="#ffdd00"/><path d="M137.275,171.749c-3.001,0-5.865-1.735-7.164-4.654l-18.686-42.007  c-1.76-3.955,0.021-8.586,3.976-10.346c3.952-1.76,8.586,0.021,10.344,3.975l18.686,42.007c1.76,3.955-0.021,8.586-3.976,10.346  C139.421,171.53,138.339,171.749,137.275,171.749z" fill="#fa496e"/><path d="M47.437,235.167c-1.976,0-3.953-0.743-5.477-2.234L9.087,200.791  c-3.095-3.026-3.151-7.987-0.124-11.082c3.024-3.094,7.986-3.151,11.081-0.124l32.872,32.142c3.095,3.026,3.151,7.987,0.124,11.082  C51.506,234.379,49.473,235.167,47.437,235.167z" fill="#a67eff"/></g></defs><g fi:class="KUsePattern"><pattern patternTransform="rotate(' +
// angle +
// ')" id="pattern_L1_0" width="350" height="350" patternUnits="userSpaceOnUse"><use xlink:href="#L1_0" x="-350" y="-350"/><use xlink:href="#L1_0" x="0" y="-350"/><use xlink:href="#L1_0" x="350" y="-350"/><use xlink:href="#L1_0" x="-350" y="0"/><use xlink:href="#L1_0" x="0" y="0"/><use xlink:href="#L1_0" x="350" y="0"/><use xlink:href="#L1_0" x="-350" y="350"/><use xlink:href="#L1_0" x="0" y="350"/><use xlink:href="#L1_0" x="350" y="350"/></pattern><rect x="0" y="0" width="100%" height="100%" fill="url(#pattern_L1_0)"/></g><g fi:class="KUsePattern"><pattern patternTransform="rotate(' +
// angle +
// ')" id="pattern_L1_1" width="350" height="350" patternUnits="userSpaceOnUse"><use xlink:href="#L1_1" x="-350" y="-350"/><use xlink:href="#L1_1" x="0" y="-350"/><use xlink:href="#L1_1" x="350" y="-350"/><use xlink:href="#L1_1" x="-350" y="0"/><use xlink:href="#L1_1" x="0" y="0"/><use xlink:href="#L1_1" x="350" y="0"/><use xlink:href="#L1_1" x="-350" y="350"/><use xlink:href="#L1_1" x="0" y="350"/><use xlink:href="#L1_1" x="350" y="350"/></pattern><rect x="0" y="0" width="100%" height="100%" fill="url(#pattern_L1_1)"/></g></svg>';

// var svgString =
// '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="pathPattern" x="0" y="0" width="52" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(' +
// angle +
// ')"><path d="M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z" stroke="#decdf7" fill="#decdf7" /></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="url(#pathPattern)" /></svg>';

// <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="pathPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="rotate(' +
// angle +
// ')"><path id="triangle" fill="orange" ><animate attributeName="d" dur="3000ms" repeatCount="indefinite" keyTimes="0; .0625; .208333333; .3125; .395833333; .645833333; .833333333; 1" calcMode="spline" keySplines="0,0,1,1; .42,0,.58,1; .42,0,1,1; 0,0,.58,1; .42,0,.58,1; .42,0,.58,1; .42,0,.58,1" values="M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 Z; M 0,0 C 50,0 50,0 100,0 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 Z; M 50,0 C 75,25 75,25 100,50 75,75 75,75 50,100 25,75 25,75 0,50 25,25 25,25 50,0 Z; M 25,50 C 37.5,25 37.5,25 50,0 75,50 75,50 100,100 50,100 50,100 0,100 12.5,75 12.5,75 25,50 Z; M 25,50 C 37.5,25 37.5,25 50,0 75,50 75,50 100,100 50,100 50,100 0,100 12.5,75 12.5,75 25,50 Z; M 50,0 C 77.6,0 100,22.4 100,50 100,77.6 77.6,100 50,100 22.4,100, 0,77.6, 0,50 0,22.4, 22.4,0, 50,0 Z; M 50,0 C 77.6,0 100,22.4 100,50 100,77.6 77.6,100 50,100 22.4,100, 0,77.6, 0,50 0,22.4, 22.4,0, 50,0 Z; M 100,0 C 100,50 100,50 100,100 50,100 50,100 0,100 0,50 0,50 0,0 50,0 50,0 100,0 Z;"/></path></pattern></defs><style type="text/css"> #triangle {animation: x 20s alternate infinite;} @keyframes x { 0% {color:red; } 10% {fill:orange; } 20% {fill:gold; } 30% {fill:yellow; } 40% {fill:yellowgreen;} 50% {fill:green; } 60% {fill:cyan; } 70% {fill:blue; } 80% {fill:violet; } 90% {fill:magenta; } 100% {fill:indigo; } }</style><rect x="0" y="0" width="100%" height="100%" fill="url(#pathPattern)" fill-opacity="0.6" /></svg>

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="pathPattern" x="0" y="0" width="72" height="144" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path id="triangle" d="M2 12h24L16 36 4 12zm36 72h24l-12 24-12-24z" fill="orange" ></pattern></defs>
<style type="text/css">
  #triangle {animation: x 20s alternate infinite;}
  @keyframes x {     0%   {color:red;        }
    10%  {fill:orange;     }
    20%  {fill:gold;       }
    30%  {fill:yellow;     }
    40%  {fill:yellowgreen;}
    50%  {fill:green;      }
    60%  {fill:cyan;       }
    70%  {fill:blue;       }
    80%  {fill:violet;     }
    90%  {fill:magenta;    }
    100% {fill:indigo;     } }
</style>
<rect x="0" y="0" width="100%" height="100%" fill="url(#pathPattern)" fill-opacity="0.6" />

<!-- works in chrome ... not in IE and others -->
</svg> */
}

INITIAL_VALUE = 45;

function svg(angle) {
  var svgString =
    '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="pathPattern" x="0" y="0" width="72" height="144" patternUnits="userSpaceOnUse" patternTransform="rotate(' +
    angle +
    ')"><path id="triangle" d="M0 6h24L28 36 15 12zm26 72h24l-12 24-18-24z" fill="purple" /></pattern></defs><style type="text/css"> #triangle {animation: x 20s alternate infinite;} @keyframes x { 0% {fill:purple; } 10% {fill:cyan; } 20% {fill:plum; } 30% {fill:hotpink; } 40% {fill:blue;} 50% {fill:indigo; } 60% {fill:hotpink; } 70% {fill:blue; } 80% {fill:violet; } 90% {fill:magenta; } 100% {fill:indigo; } }</style><rect x="0" y="0" width="100%" height="100%" fill="url(#pathPattern)" fill-opacity="0.2" /></svg>';
  var encodedData = window.btoa(svgString);
  var url = "data:image/svg+xml;base64," + encodedData;
  document.body.style.backgroundImage = "url(" + url + ")";
}

svg(INITIAL_VALUE);

var xCenter = window.innerWidth / 2;
var yCenter = window.innerHeight / 2;

document.addEventListener("mousemove", function() {
  var xPos = xCenter - event.clientX;
  var yPos = yCenter - event.clientY;
  var fraction = convertRange(xPos, yPos);
  console.log(fraction);
  var angle = fraction * 10;
  svg(angle);
});

document.addEventListener("touchstart", function() {
  var fraction = convertRange(xPos, yPos);
  var angle = fraction * 10;
  svg(angle);
});

function convertRange(mouseX, mouseY) {
  return mouseX / xCenter + mouseY / yCenter;
}
