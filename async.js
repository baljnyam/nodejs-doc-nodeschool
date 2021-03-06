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

// Async 2 types callback and promise

// Async callback
// Secon parameter of the addEventListener() is async callback
btn.addEventListener("click", () => {
  alert("You clicked me!");

  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  document.body.appendChild(pElem);
});

// Another example

function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset("coffee.jpg", "blob", displayImage);

// not all callbacks are async
// Array.prototype.forEach()
const gods = ["Apollo", "Artemis", "Ares", "Zeus"];

gods.forEach(function(eachName, index) {
  console.log(index + ". " + eachName);
});

// Promise - modern fetching fetch() like XMLHttpRequest

fetch("products.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    products = json;
    initialize();
  })
  .catch(function(err) {
    console.log("Fetch problem: " + err.message);
  });

// Another example

let myFetch = fetch(url);

myFetch.then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});

// 1. fetch() return an promise that resolve the HTTP response
// 2. inside .then() will be response as a parameter
// 3. another .then textContent making <pre> element to equal the text string

// It can done by another

fetch(url)
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    poemDisplay.textContent = text;
  });

// return statement in front of response.text()

//-----------------------------------------------------------------------------

//setTimeout() setInterval() requestAnimationFrame()

function sayHi(who) {
  alert(`Hello ${who}!`);
}

let myGreeting = setTimeout(sayHi, 2000, "Mr. Universe");

clearTimeout(myGreeting);
//----------interval
function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("demo").textContent = time;
}

const createClock = setInterval(displayTime, 1000);

clearInterval(myInterval);

// recursive

let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 100);
}, 100);

setInterval(function run() {
  console.log(i);
  i++;
}, 100);

// set a block of code to run as soon as all of the main thread has finished running

setTimeout(function() {
  alert("World");
}, 0);

alert("Hello");

// -------------------------------

// Define function to fetch a file and return it in a usable form
function fetchAndDecode(url, type) {
  // Returning the top level promise, so the result of the entire chain is returned out of the function
  return fetch(url)
    .then(response => {
      // Depending on what type of file is being fetched, use the relevant function to decode its contents
      if (type === "blob") {
        return response.blob();
      } else if (type === "text") {
        return response.text();
      }
    })
    .catch(e => {
      console.log(
        `There has been a problem with your fetch operation for resource "${url}": ` +
          e.message
      );
    });
}

// IndexedDB methods to use promises:
function promisifyRequest(request) {
  return new Promise(function(resolve, reject) {
    request.onsuccess = function() {
      resolve(request.result);
    };

    request.onerror = function() {
      reject(request.error);
    };
  });
}

// Example

async function myFetch() {
  let response = await fetch("coffee.jpg");
  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch();

// async function

let hello = async () => {
  return "HEllo";
};

hello().then(value => console.log(value));
//or
hello().then(console.log);

// fetch to async/await

fetch("coffee.jpg")
  .then(response => response.blob())
  .then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch(e => {
    console.log(
      "There has been a problem with your fetch operation: " + e.message
    );
  });

// async/await

async function myFetch() {
  let response = await fetch("coffee.jpg");
  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement("img");
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch().catch(e => {
  console.log("there ha been a problem with your fetch: " + e.message);
});
