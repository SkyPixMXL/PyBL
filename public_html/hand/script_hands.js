const videoElement = document.getElementsByClassName("input_video")[0];
const canvasElement = document.getElementsByClassName("output_canvas")[0];
const canvasCtx = canvasElement.getContext("2d");
const dropdown = document.querySelector(".dropdown");
const blocLinks = document.querySelector(".bloc-links");
const btnDrop = document.querySelector(".btn-top");
const liItems = document.querySelectorAll(".dropdown li");

let toggleIndex;

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
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
        color: "#0a0a0",
        lineWidth: 5,
      });
      drawLandmarks(canvasCtx, landmarks, { color: "#006eff", lineWidth: 2 });
    }
  }

  canvasCtx.restore();
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
