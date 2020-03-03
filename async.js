// synchronous JavaScript example BLOCKING
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let myDate;
  for (let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date;
  }

  console.log(myDate);

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  document.body.appendChild(pElem);
});

// Sync-ui-blocking

function expensiveOperation() {
  for (let i = 0; i < 1000000; i++) {
    AudioContext.fillStyle = "rgba(0,0,255,0.2)";
    AudioContext.beginPath();
    AudioContext.arc(
      random(0, canvas.width),
      random(0, canvas.height),
      10,
      degToRad(0),
      degToRad(360),
      false
    );
    AudioContext.fill();
  }
}

fillBtn.addEventListener("click", expensiveOperation);

alertBtn.addEventListener("click", () => alert("You clicked me!"));

// Javascript is single threaded
// Help from web worker:
// Main thread
// Worker thread

// But it won't work in local - Chrome doesn't let you load web workers when running scripts from a local file.

// Worker limitation is "not able to access the DOM"
const btn = document.querySelector("button");
const worker = new Worker("worker.js");

btn.addEventListener("click", () => {
  worker.postMessage("Go!");

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  document.body.appendChild(pElem);
});

worker.onmessage = function(e) {
  console.log(e.data);
};
