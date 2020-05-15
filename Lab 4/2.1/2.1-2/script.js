document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const rectDefault = { a: 20, x: canvas.width - 30, y: 10 };
  const rect = { a: 20, x: canvas.width - 30, y: 10 };

  const refs = {
    start: document.getElementById("start"),
    pause: document.getElementById("pause"),
    restart: document.getElementById("restart"),
  };

  let isRunnig = false;

  const draw = function () {
    rect.x -= 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    ctx.fillRect(rect.x, rect.y, rect.a, rect.a);

    if (isRunnig) {
      requestAnimationFrame(draw);
    }
  };

  const reDraw = function () {
    rect.a = rectDefault.a;
    rect.x = rectDefault.x;
    rect.y = rectDefault.y;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    ctx.fillRect(rect.x, rect.y, rect.a, rect.a);
  };

  refs.start.onclick = function () {
    if (!isRunnig) {
      isRunnig = true;
      requestAnimationFrame(draw);
    }
  };

  refs.pause.onclick = function () {
    if (isRunnig) {
      isRunnig = false;
    }
  };

  refs.restart.onclick = function () {
    isRunnig = false;
    requestAnimationFrame(reDraw);
  };
});
