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
      angles(landmarks);
    }
  }

  canvasCtx.restore();
}

function angles(landmarks) {
  var joint_list;
  joint_list = [
    [2, 1, 0],
    [3, 2, 1],
    [4, 3, 2],
    [6, 5, 0],
    [7, 6, 5],
    [10, 9, 0],
    [11, 10, 9],
    [14, 13, 0],
    [15, 14, 13],
    [18, 17, 0],
    [19, 18, 17],
  ];
  let m = [];
  for (const joint of joint_list) {
    a = [landmarks[joint[0]].x, landmarks[joint[0]].y];

    b = [landmarks[joint[1]].x, landmarks[joint[1]].y];

    c = [landmarks[joint[2]].x, landmarks[joint[2]].y];

    radians =
      Math.atan2(c[1] - b[1], c[0] - b[0]) -
      Math.atan2(a[1] - b[1], a[0] - b[0]);

    angle = Math.abs((radians * 180.0) / Math.PI);

    if (angle > 180.0) {
      angle = 360 - angle;
    }
    m.push(parseInt(angle));
  }
  trad(m);
}
function trad(m) {
  if (
    175 >= m[0] &&
    m[0] >= 159 &&
    179 >= m[1] &&
    m[1] >= 150 &&
    179 >= m[2] &&
    m[2] >= 150 &&
    139 >= m[3] &&
    m[3] >= 60 &&
    139 >= m[5] &&
    m[4] >= 60 &&
    139 >= m[7] &&
    m[5] >= 6
  ) {
    l0 = "pouce en l'air";
  } else if (
    160 >= m[0] &&
    m[0] >= 150 &&
    175 >= m[1] &&
    m[1] >= 160 &&
    179 >= m[2] &&
    m[2] >= 160 &&
    179 >= m[3] &&
    m[3] >= 160 &&
    179 >= m[4] &&
    m[4] >= 160 &&
    179 >= m[5] &&
    m[5] >= 160 &&
    179 >= m[6] &&
    m[6] >= 160 &&
    179 >= m[7] &&
    m[7] >= 160 &&
    179 >= m[8] &&
    m[8] >= 160 &&
    179 >= m[9] &&
    m[9] >= 160 &&
    179 >= m[10] &&
    m[10] >= 160
  ) {
    l0 = "Bonjour";
  } else if (
    159 >= m[0] &&
    m[0] >= 138 &&
    165 >= m[1] &&
    m[1] >= 150 &&
    160 >= m[2] &&
    m[2] >= 150 &&
    179 >= m[3] &&
    m[3] >= 160 &&
    60 >= m[4] &&
    m[4] >= 0 &&
    179 >= m[5] &&
    m[5] >= 160 &&
    60 >= m[6] &&
    m[6] >= 0 &&
    179 >= m[7] &&
    m[7] >= 160 &&
    60 >= m[8] &&
    m[8] >= 0 &&
    179 >= m[9] &&
    m[9] >= 140 &&
    60 >= m[10] &&
    m[10] >= 0
  ) {
    l0 = "A";
  } else if (
    150 >= m[0] &&
    m[0] >= 135 &&
    159 >= m[1] &&
    m[1] >= 149 &&
    139 >= m[2] &&
    m[2] >= 129 &&
    179 >= m[3] &&
    m[3] >= 160 &&
    179 >= m[4] &&
    m[4] >= 160 &&
    179 >= m[5] &&
    m[5] >= 160 &&
    179 >= m[6] &&
    m[6] >= 160 &&
    179 >= m[7] &&
    m[7] >= 160 &&
    179 >= m[8] &&
    m[8] >= 160 &&
    179 >= m[9] &&
    m[9] >= 160 &&
    179 >= m[10] &&
    m[10] >= 160
  ) {
    l0 = "B";
  } else if (
    159 >= m[0] &&
    m[0] >= 146 &&
    179 >= m[1] &&
    m[1] >= 169 &&
    179 >= m[2] &&
    m[2] >= 169 &&
    178 >= m[3] &&
    m[3] >= 160 &&
    175 >= m[4] &&
    m[4] >= 160 &&
    179 >= m[5] &&
    m[5] >= 160 &&
    175 >= m[6] &&
    m[6] >= 155 &&
    179 >= m[7] &&
    m[7] >= 165 &&
    170 >= m[8] &&
    m[8] >= 150 &&
    179 >= m[9] &&
    m[9] >= 160 &&
    171 >= m[10] &&
    m[10] >= 156
  ) {
    l0 = "C";
  } else if (
    170 >= m[0] &&
    m[0] >= 160 &&
    179 >= m[1] &&
    m[1] >= 169 &&
    169 >= m[2] &&
    m[2] >= 150 &&
    179 >= m[3] &&
    m[3] >= 170 &&
    179 >= m[4] &&
    m[4] >= 170 &&
    158 >= m[5] &&
    m[5] >= 144 &&
    80 >= m[6] &&
    m[6] >= 60 &&
    158 >= m[7] &&
    m[7] >= 144 &&
    152 >= m[9] &&
    m[9] >= 138
  ) {
    l0 = "D";
  } else {
    l0 = "";
  }
  tr = l0;
  var input = document.getElementById("input");
  input.textContent = l0;
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

var flag = true;
const buttonp = document.getElementById("boutp")
function button_P() {
  if (flag == false) {
    camera.stop();
    buttonp.textContent = 'Resume';
    flag = true;
  } else if (flag == true) {
    camera.start();
    buttonp.textContent = 'Stop';
    flag = false;
  }
}
