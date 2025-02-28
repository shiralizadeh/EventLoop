document.body.appendChild(el);

el.style.display = "none";

// ---

el.style.display = "none";

document.body.appendChild(el);

// ---

document.body.appendChild(el);

el.style.display = "none";
el.style.display = "block";
el.style.display = "none";
el.style.display = "block";
el.style.display = "none";
el.style.display = "block";
el.style.display = "none";
el.style.display = "block";
el.style.display = "none";
el.style.display = "block";
el.style.display = "none";
el.style.display = "block";

// ---

console.log("here");

// ---

console.log("here");

setTimeout(() => {
  console.log("timeout");
});

// ---

setTimeout(() => {
  console.log("timeout");
});

console.log("here");

// ---

setTimeout(() => {
  console.log("timeout");
});

console.log("here");

Promise.resolve().then(() => {
  console.log("promise");
});

// ---

setTimeout(() => {
  console.log("timeout");
});

console.log("here");

new Promise((resolve) => {
  console.log("body");
  resolve();
}).then(() => {
  console.log("promise");
});

// ---

function Promise(callback) { 
  callback()
}

// --

setTimeout(() => () => {
  console.log("timeout 1");

  Promise.resolve().then(() => {
    console.log("promise");
  });
});

setTimeout(() => {
  console.log("timeout 2");
});

// ---

function loop() {
  console.log("here");

  Promise.resolve().then(() => {
    loop();
  });
}

// ---

function loop() {
  console.log("here");

  setTimeout(() => {
    loop();
  });
}

// ---

function loop() {
  console.log("here");

  requestAnimationFrame(() => {
    loop();
  });
}

// ---

document.body.addEventListener("click", function () {
  Promise.resolve().then(() => console.log("promise 1"));

  console.log("click 1");
});

document.body.addEventListener("click", function () {
  Promise.resolve().then(() => console.log("promise 2"));

  console.log("click 2");
});

// ---

document.body.addEventListener("click", function () {
  Promise.resolve().then(() => console.log("promise 1"));

  console.log("click 1");
});

document.body.addEventListener("click", function () {
  Promise.resolve().then(() => console.log("promise 2"));

  console.log("click 2");
});

document.body.click();

// ---

queueMicrotask(() => {
  console.log("queueMicrotask");
});

Promise.resolve().then(() => {
  console.log("promise");
});

// ---

queueMicrotask(() => {
  console.log("queueMicrotask");
});

process.nextTick(() => {
  console.log("nextTick");
});

// ---

scheduler
  .postTask(
    () => {
      return fetch(...);
    },
    {
      priority: "user-blocking",
      // ["user-blocking", "user-visible", "background"]
    }
  )
  .then((taskResult) => {
    console.log("taskResult:", taskResult);
  });
