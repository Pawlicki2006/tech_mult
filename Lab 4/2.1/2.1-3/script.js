const plotno = document.getElementById("canvas");
const ctx = plotno.getContext("2d");
const rerun_button = document.querySelector("#restart");
const timeInput = document.getElementById("timeValue");
document.addEventListener("DOMContentLoaded", function () {
  rerun_button.addEventListener("click", (event) => {
    restart();
    start();
  });
});

function restart() {
  ctx.clearRect(0, 0, 600, 600);
}

function start() {
  const newBar = new Bar(200, 500);
  newBar.fillInTime(timeInput.value);
}

class Bar {
  constructor(xPos, maxHeight) {
    this.maxHeight = maxHeight;
    this.h = 0;
    this.x = xPos;
    this.y = 600;
    this.w = 50;
    this.color = "#1236f6";
    this.label = "test";
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
    ctx.fillStyle = "#000";
    ctx.font = "20px Georgia";
    ctx.fillText(this.label, this.x, this.y - this.h - 5);
  }
}
