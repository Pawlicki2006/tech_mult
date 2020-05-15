let FPS = 100;
let animationLoop = null;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  let bgY = 0;

  const draw = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bgY++;

    ctx.drawImage(img, 0, bgY);

    ctx.drawImage(img, 0, bgY - canvas.height);

    if (bgY >= canvas.height) {
      bgY = 0;
    }
  };

  const img = new Image();
  img.src = "./assets/bg.png";

  img.addEventListener("load", function () {
    startAnimation(FPS);
  });

  function startAnimation(fps) {
    animationLoop = setInterval(function () {
      requestAnimationFrame(draw);
    }, 1000 / fps);
  }
});
