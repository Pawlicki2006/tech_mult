const plotno = document.getElementById("canvas");
const ctx = plotno.getContext("2d");
const rerun_button = document.querySelector("#restart");
const timeInput = document.getElementById("timeValue");
const addNewBarButton = document.getElementById("addNewBar");

let bars = [];
let spacing = 100;
let spacingChange = 50;

document.addEventListener("DOMContentLoaded", function () {
  addNewBarButton.addEventListener("click", () => {
    let newBarValue = prompt("Enter destiny value for new bar", 100);
    if (newBarValue != null) {
      if (!isNaN(parseInt(newBarValue))) {
        bars.push(new Bar(spacing, newBarValue));
        spacing += spacingChange;
      }
    }
  });

  rerun_button.addEventListener("click", () => {
    restart();
    start();
  });
});

function restart() {
  for(let bar of bars){
    bar.h = 0;
  }
  ctx.clearRect(0, 0, 600, 600);
}

function start() {
  for (let bar of bars) {
    bar.fillInTime(timeInput.value);
  }
}

class Bar {
  constructor(xPos, maxHeight) {
    this.maxHeight = maxHeight;
    this.h = 0;
    this.x = xPos;
    this.y = 600;
    this.w = 25;
    this.color = "#1236f6";
  }

  fillInTime(time) {
    const _self = this;
    const timeMs = parseInt(time) * 1000;
    if (timeMs) {
      let pxPerMs = (this.maxHeight / timeMs) * 10;
      let interval = setInterval(function () {
        _self.h += pxPerMs;
        console.log(_self.h);
        _self.draw(ctx);

        if (_self.h >= _self.maxHeight) {
          clearInterval(interval);
          interval = null;
          console.log("cleared");
        }
      }, 10);
    }
  }

  draw(ctx) {
    ctx.clearRect(this.x, this.y, this.w, -800);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, -this.h);
  }
}
