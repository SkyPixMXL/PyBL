const videoElement = document.getElementsByClassName("input_video")[0];
const canvasElement = document.getElementsByClassName("output_canvas")[0];
const canvasCtx = canvasElement.getContext("2d");
const dropdown = document.querySelector(".dropdown");
const blocLinks = document.querySelector(".bloc-links");
const btnDrop = document.querySelector(".btn-top");
const liItems = document.querySelectorAll(".dropdown li");

let toggleIndex;
let nli = [];
btnDrop.addEventListener("click", toggleDropDown);
function toggleDropDown() {
  if (!toggleIndex) {
    blocLinks.style.height = `${blocLinks.scrollHeight}px`;
    toggleIndex = true;
    return;
  }

  blocLinks.style.height = 0;
  toggleIndex = false;
}

liItems.forEach((li) => li.addEventListener("click", toggleDropDown));
function onResults(results) {
  canvasCtx.save();

  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  canvasCtx.drawImage(
    results.image,
    0,
    0,
    canvasElement.width,
    canvasElement.height
  );
  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
      landmarks_k = [landmarks[8]];
      drawLandmarks(canvasCtx, landmarks_k, {
        color: "#006eff",
        lineWidth: 2,
      });
      x = parseInt(landmarks[8]["x"] * -1280);
      y = parseInt(landmarks[8]["y"] * 720);
      tex(x, y);
    }
  }
  keyboard();
}
function keyboard() {
  //*-1280,0_____0,0
  // ⎥           ⎪
  //-1280,720___0,720
  const y1 = 250;
  const y2 = 350;
  const y3 = 450;
  const x1 = -1060;
  const x2 = -1040;
  canvasCtx.scale(-1, 1);
  canvasCtx.beginPath();
  //ligne 1
  canvasCtx.rect(x1, y1, 70, 70);
  canvasCtx.rect(x1 + 95, y1, 70, 70);
  canvasCtx.rect(x1 + 95 * 2, y1, 70, 70);
  canvasCtx.rect(x1 + 95 * 3, y1, 70, 70);
  canvasCtx.rect(x1 + 95 * 4, y1, 70, 70);
  canvasCtx.rect(x1 + 95 * 5, y1, 70, 70);
  canvasCtx.rect(x1 + 95 * 6, y1, 70, 70);
  canvasCtx.rect(x1 + 95 * 7, y1, 70, 70);
  canvasCtx.rect(x1 + 95 * 8, y1, 70, 70);
  canvasCtx.rect(x1 + 95 * 9, y1, 70, 70);
  //ligne 2
  canvasCtx.rect(x2, y2, 70, 70);
  canvasCtx.rect(x2 + 95, y2, 70, 70);
  canvasCtx.rect(x2 + 95 * 2, y2, 70, 70);
  canvasCtx.rect(x2 + 95 * 3, y2, 70, 70);
  canvasCtx.rect(x2 + 95 * 4, y2, 70, 70);
  canvasCtx.rect(x2 + 95 * 5, y2, 70, 70);
  canvasCtx.rect(x2 + 95 * 6, y2, 70, 70);
  canvasCtx.rect(x2 + 95 * 7, y2, 70, 70);
  canvasCtx.rect(x2 + 95 * 8, y2, 70, 70);
  canvasCtx.rect(x2 + 95 * 9, y2, 70, 70);
  //ligne 2
  canvasCtx.rect(x1 - 15, y3, 90, 70);
  canvasCtx.rect(x1 + 95, y3, 70, 70);
  canvasCtx.rect(x1 + 95 * 2, y3, 70, 70);
  canvasCtx.rect(x1 + 95 * 3, y3, 70, 70);
  canvasCtx.rect(x1 + 95 * 4, y3, 70, 70);
  canvasCtx.rect(x1 + 95 * 5, y3, 70, 70);
  canvasCtx.rect(x1 + 95 * 6, y3, 70, 70);
  canvasCtx.rect(x1 + 95 * 7, y3, 70, 70);
  canvasCtx.rect(x1 + 95 * 8, y3, 70, 70);
  canvasCtx.rect(x1 + 95 * 9, y3, 90, 70);
  //espace
  canvasCtx.rect(x1 + 95 * 3, 540, 350, 60);
  canvasCtx.font = "50px serif";
  canvasCtx.fillStyle = "#DD2922";
  //ligne 1
  canvasCtx.fillText("A", x1 + 15, y1 + 50);
  canvasCtx.fillText("Z", x1 + 95 + 15, y1 + 50);
  canvasCtx.fillText("E", x1 + 95 * 2 + 15, y1 + 50);
  canvasCtx.fillText("R", x1 + 95 * 3 + 15, y1 + 50);
  canvasCtx.fillText("T", x1 + 95 * 4 + 15, y1 + 50);
  canvasCtx.fillText("Y", x1 + 95 * 5 + 15, y1 + 50);
  canvasCtx.fillText("U", x1 + 95 * 6 + 15, y1 + 50);
  canvasCtx.fillText("I", x1 + 95 * 7 + 15, y1 + 50);
  canvasCtx.fillText("O", x1 + 95 * 8 + 15, y1 + 50);
  canvasCtx.fillText("P", x1 + 95 * 9 + 15, y1 + 50);
  //ligne 2
  canvasCtx.fillText("Q", x2 + 15, y2 + 50);
  canvasCtx.fillText("S", x2 + 95 + 15, y2 + 50);
  canvasCtx.fillText("D", x2 + 95 * 2 + 15, y2 + 50);
  canvasCtx.fillText("F", x2 + 95 * 3 + 15, y2 + 50);
  canvasCtx.fillText("G", x2 + 95 * 4 + 15, y2 + 50);
  canvasCtx.fillText("H", x2 + 95 * 5 + 15, y2 + 50);
  canvasCtx.fillText("J", x2 + 95 * 6 + 15, y2 + 50);
  canvasCtx.fillText("K", x2 + 95 * 7 + 15, y2 + 50);
  canvasCtx.fillText("L", x2 + 95 * 8 + 15, y2 + 50);
  canvasCtx.fillText("M", x2 + 95 * 9 + 15, y2 + 50);
  //ligne 3
  canvasCtx.fillText("↲", x1 + 15, y3 + 50);
  canvasCtx.fillText("W", x1 + 95 + 15, y3 + 50);
  canvasCtx.fillText("X", x1 + 95 * 2 + 15, y3 + 50);
  canvasCtx.fillText("C", x1 + 95 * 3 + 15, y3 + 50);
  canvasCtx.fillText("V", x1 + 95 * 4 + 15, y3 + 50);
  canvasCtx.fillText("B", x1 + 95 * 5 + 15, y3 + 50);
  canvasCtx.fillText("N", x1 + 95 * 6 + 15, y3 + 50);
  canvasCtx.fillText(",", x1 + 95 * 7 + 15, y3 + 50);
  canvasCtx.fillText(".", x1 + 95 * 8 + 15, y3 + 50);
  canvasCtx.fillText("⌫", x1 + 95 * 9 + 15, y3 + 50);
  //espace
  canvasCtx.fillText("﹈", x1 + 95 * 4.5 + 15, 610);
  canvasCtx.stroke();
  canvasCtx.restore();
}
function tex(x, y) {
  let lit = [
    [-1060, -990, 250, 320],
    [-965, -895, 250, 320],
    [-870, -800, 250, 320],
    [-775, -705, 250, 320],
    [-680, -610, 250, 320],
    [-585, -515, 250, 320],
    [-490, -420, 250, 320],
    [-395, -325, 250, 320],
    [-300, -230, 250, 320],
    [-205, -135, 250, 320],
    [-1040, -970, 350, 420],
    [-945, -875, 350, 420],
    [-850, -780, 350, 420],
    [-755, -685, 350, 420],
    [-660, -590, 350, 420],
    [-565, -495, 350, 420],
    [-470, -400, 350, 420],
    [-375, -305, 350, 420],
    [-280, -210, 350, 420],
    [-185, -115, 350, 420],
    [-1075, -970, 450, 520],
    [-965, -895, 450, 520],
    [-870, -800, 450, 520],
    [-775, -705, 450, 520],
    [-680, -610, 450, 520],
    [-585, -515, 450, 520],
    [-490, -420, 450, 520],
    [-395, -325, 450, 520],
    [-300, -230, 450, 520],
    [-205, -135, 450, 520],
    [-775, -425, 540, 600],
  ];
  for (let no in lit) {
    if (x > lit[no][0] && lit[no][1] > x && y > lit[no][2] && lit[no][3] > y) {
      if (no == nli[[nli.length - 1]] || nli.length == 0) {
        nli.push(no);
        if (nli.length == 10 && no == 29) {
          keyPressed(no);
          nli = [];
        } else if (nli.length == 20) {
          keyPressed(no);
          nli = [];
        }
      } else {
        nli = [];
      }
    }
  }
}
function keyPressed(no) {
  const letr = [
    "a",
    "z",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "q",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "\n",
    "w",
    "x",
    "c",
    "v",
    "b",
    "n",
    ",",
    ".",
    "suppr",
    " ",
  ];
  val = letr[no];
  if (val == "suppr") {
    textarea.value = textarea.value.slice(0, -1);
  } else {
    textarea.value += val;
  }
}
const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  },
});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({ image: videoElement });
  },
  width: 1280,
  height: 720,
});
camera.start();
var flag = false;
function button_P() {
  if (flag == false) {
    camera.stop();
    flag = true;
  } else if (flag == true) {
    camera.start();
    flag = false;
  }
}
