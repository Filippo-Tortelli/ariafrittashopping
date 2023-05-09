function preload(){
  // put preload code here
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-holder');
  background(255);
  // imgPreview();
}

function draw() {
  // put drawing code here
}

function imgPreview() {
  for (let i = 0; i < 9; i++) {
    let s = 100;
    let x = random((width/2)-2*s, (width/2)+s);
    let y = random((height/2)-2*s, (height/2)+s);
    fill(200);
    square(x,y,s*2);
  }

  console.log(frameCount);


  if(frameCount%100==0) {
  }
}

function closeTag() {
  document.getElementById("tag-project").classList.add("hide");
  background(255);
}

function openTag() {
  document.getElementById("tag-project").classList.remove("hide");
  imgPreview();
}

// projects
function openDescription() {
  console.log("ciao");
  document.getElementById("descriptionClosed").classList.add("hide");
  document.getElementById("descriptionOpened").classList.remove("hide");
}
