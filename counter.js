const obj = { counter: 0 };

Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});

Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});

Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
console.log(obj);

function onClickIncrement() {
  obj.increment;
  document.getElementById("display").innerHTML = obj.counter;
}

function onClickDecrement() {
  if (obj.counter != 0) {
    obj.decrement;
  } else {
    document.getElementById("error").innerHTML = "Cannot decrement further!!!";
    window.setTimeout(function () {
      document.getElementById("error").innerHTML = "...";
    }, 1000);
  }
  document.getElementById("display").innerHTML = obj.counter;
}
function onClickReset() {
  obj.reset;
  document.getElementById("display").innerHTML = obj.counter;
}
