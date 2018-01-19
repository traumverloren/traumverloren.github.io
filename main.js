// Initiate a Service Worker to cache it!
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function(reg) {
      if (reg.installing) {
        console.log("Service worker installing");
      } else if (reg.waiting) {
        console.log("Service worker installed");
      } else if (reg.active) {
        console.log("Service worker active");
      }
      // registration worked
      console.log("Registration succeeded. Scope is " + reg.scope);
    })
    .catch(function(error) {
      // registration failed
      console.log("Registration failed with " + error);
    });
}
