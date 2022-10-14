document.addEventListener("DOMContentLoaded", function (event) {
  var header = document.getElementById("headerContainer");
  var menu = document.getElementById("menuContainer");
  var defaultLogo = document.getElementById("defaultLogo");
  var fixedLogo = document.getElementById("fixedLogo");
  if (
    window.location.origin + "/es/about-us" == window.location.href ||
    window.location.origin + "/en/about-us" == window.location.href
  ) {
    header.classList.add("fixedHeader");
    header.style.position = "initial";
    menu.classList.add("fixedMenu");
    defaultLogo.style.display = "none";
    fixedLogo.style.display = "block";
  }
  if (
    window.location.origin + "/es" != window.location.href &&
    window.location.origin + "/en" != window.location.href
  ) {
    header.classList.add("fixedHeader");
    menu.classList.add("fixedMenu");
    defaultLogo.style.display = "none";
    fixedLogo.style.display = "block";
  }
});

window.addEventListener("scroll", function () {
  var headerScroll = document.getElementById("headerContainer");
  var menuScroll = document.getElementById("menuContainer");
  var defaultLogoScroll = document.getElementById("defaultLogo");
  var fixedLogoScroll = document.getElementById("fixedLogo");
  if (
    window.location.origin + "/es" == window.location.href ||
    window.location.origin + "/en" == window.location.href
  ) {
    if (window.scrollY == 0) {
      headerScroll.classList.remove("fixedHeader");
      menuScroll.classList.remove("fixedMenu");
      fixedLogoScroll.style.display = "none";
      defaultLogoScroll.style.display = "block";
    } else {
      headerScroll.classList.add("fixedHeader");
      menuScroll.classList.add("fixedMenu");
      defaultLogoScroll.style.display = "none";
      fixedLogoScroll.style.display = "block";
    }
  } else {
    if (
      window.location.origin + "/es/about-us" == window.location.href ||
      window.location.origin + "/en/about-us" == window.location.href
    ) {
      if (window.scrollY == 0) {
        headerScroll.classList.add("fixedHeader");
        headerScroll.style.position = "initial";
        menuScroll.classList.add("fixedMenu");
      } else {
        headerScroll.style.position = "fixed";
      }
    }
  }
});
