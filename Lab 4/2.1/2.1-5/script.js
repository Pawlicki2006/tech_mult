let FPS = 3;

const framesMax = 8;
const frameWidth = 108;
const frameHeight = 120;

let currentFrame = 0;
let animationLoop = null;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const buttons = {
    speedup: document.getElementById("speedup"),
    slowdown: document.getElementById("slowdown"),
  };

  buttons.speedup.onclick = function () {
    FPS++;
    startAnimation(FPS);
  };

  buttons.slowdown.onclick = function () {
    if (FPS > 1) {
      FPS--;
      startAnimation(FPS);
    }
  };

  const draw = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (currentFrame > framesMax - 1) {
      currentFrame = 0;
    }
    currentFrame++;

    const cutX = (currentFrame - 1) * frameWidth;
    const drawPosX = canvas.width / 2 - 60;
    const drawPosY = canvas.height - frameHeight;

    ctx.drawImage(
      img,
      cutX,
      0,
      frameWidth,
      frameHeight,
      drawPosX,
      drawPosY,
      frameWidth,
      frameHeight
    );
  };

  const img = new Image();
  img.src = "./assets/animation.png";

  img.addEventListener("load", function () {
    startAnimation(FPS);
  });

  function startAnimation(fps) {
    if (animationLoop) {
      clearInterval(animationLoop);
    }
    animationLoop = setInterval(function () {
      requestAnimationFrame(draw);
    }, 1000 / fps);
  }
});
