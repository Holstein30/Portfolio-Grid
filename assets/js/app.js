"use strict";

// Close and open nav menu

document.getElementById("menu-close").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("sidebar-wrapper").classList.toggle("active");
});

document.getElementById("menu-toggle").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("sidebar-wrapper").classList.toggle("active");
});
