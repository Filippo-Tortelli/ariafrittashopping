function openDescription() {
  document.getElementById("descriptionClosed").classList.add("hide");
  document.getElementById("descriptionOpened").classList.remove("hide");

  document.getElementById("slideTitle").classList.add("hide");
  document.getElementById("slideNumber").classList.add("hide");
  document.getElementById("imagesContainer").classList.add("hide");
  document.getElementById("detailProject").classList.remove("hide");
}

function closeDescription() {
  document.getElementById("descriptionClosed").classList.remove("hide");
  document.getElementById("descriptionOpened").classList.add("hide");

  document.getElementById("slideTitle").classList.remove("hide");
  document.getElementById("slideNumber").classList.remove("hide");
  document.getElementById("imagesContainer").classList.remove("hide");
  document.getElementById("detailProject").classList.add("hide");
}

function newSlide1() {
  document.getElementById("imgSlider2").classList.remove("hide");
  document.getElementById("imgSlider1").classList.add("hide");
}

function newSlide2() {
  document.getElementById("imgSlider1").classList.remove("hide");
  document.getElementById("imgSlider2").classList.add("hide");
}
