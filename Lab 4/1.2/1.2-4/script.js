const FPS = 60;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const keys = [];

  const rectPosition = {
    x: 10,
    y: 10,
  };

  document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
  });

  document.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
  });

  function update() {
    if (keys[38]) {
      //up
      rectPosition.y -= 2;
    }

    if (keys[40]) {
      //down
      rectPosition.y += 2;
    }

    if (keys[37]) {
      //left
      rectPosition.x -= 2;
    }
    if (keys[39]) {
      //right
      rectPosition.x += 2;
    }

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(rectPosition.x, rectPosition.y, 150, 100);
    ctx.stroke();
  }

  const gameLoop = setInterval(update, 1000 / FPS);
});
