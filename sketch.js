function preload(){
  // put preload code here
}

function setup() {
  // var cnv = createCanvas(windowWidth, windowHeight);
  // cnv.parent('sketch-holder');
  background(255);
  noCanvas();
  // imgPreview();
}

function draw() {
  let speed = 30;
  if (frameCount%speed==0) {
    console.log("ciao");
    document.getElementById("projectPreview").innerHTML = "<img class=\"preview\" src=\"img/preview/minesweeper/mine3.jpg\"></img>";
} else if (frameCount%speed==speed*2/3) {
    console.log("ciao");
    document.getElementById("projectPreview").innerHTML = "<img class=\"preview\" src=\"img/preview/minesweeper/mine2.jpg\"></img>";
  } else if (frameCount%speed==speed/3) {
      console.log("ciao");
      document.getElementById("projectPreview").innerHTML = "<img class=\"preview\" src=\"img/preview/minesweeper/mine1.jpg\"></img>";
    }
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

function closePreview() {
  document.getElementById("projectPreview").classList.add("hide");
}

function openPreview() {
  document.getElementById("projectPreview").classList.remove("hide");
  // imgPreview();
}

// projects
function openDescription() {
  console.log("ciao");
  document.getElementById("descriptionClosed").classList.add("hide");
  document.getElementById("descriptionOpened").classList.remove("hide");
}
