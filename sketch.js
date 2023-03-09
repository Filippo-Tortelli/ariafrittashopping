var headSwitch = 0;

function setup() {
  // switchHead();
}

function draw() {}

function openHead() {
  document.getElementById("closed-head").classList.add("hide");
  document.getElementById("opened-head").classList.remove("hide");
}

function closeHead() {
  document.getElementById("closed-head").classList.remove("hide");
  document.getElementById("opened-head").classList.add("hide");
}

function openBody() {
  document.getElementById("closed-body").classList.add("hide");
  document.getElementById("opened-body").classList.remove("hide");
}

function closeBody() {
  document.getElementById("closed-body").classList.remove("hide");
  document.getElementById("opened-body").classList.add("hide");
}

function openAbout() {
  document.getElementById("closed-about").classList.add("hide");
  document.getElementById("opened-about").classList.remove("hide");
}

function closeAbout() {
  document.getElementById("closed-about").classList.remove("hide");
  document.getElementById("opened-about").classList.add("hide");
}

function openCurrently() {
  document.getElementById("closed-currently").classList.add("hide");
  document.getElementById("opened-currently").classList.remove("hide");
}

function closeCurrently() {
  document.getElementById("closed-currently").classList.remove("hide");
  document.getElementById("opened-currently").classList.add("hide");
}

function openProjects() {
  document.getElementById("closed-projects").classList.add("hide");
  document.getElementById("opened-projects").classList.remove("hide");
}

function closeProjects() {
  document.getElementById("closed-projects").classList.remove("hide");
  document.getElementById("opened-projects").classList.add("hide");
}

function openContacts() {
  document.getElementById("closed-contacts").classList.add("hide");
  document.getElementById("opened-contacts").classList.remove("hide");
}

function closeContacts() {
  document.getElementById("closed-contacts").classList.remove("hide");
  document.getElementById("opened-contacts").classList.add("hide");
}
