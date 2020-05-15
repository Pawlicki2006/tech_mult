document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const rect = { a: 20, x: canvas.width - 30, y: 10 };

  const draw = function () {
    rect.x -= 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    ctx.fillRect(rect.x, rect.y, rect.a, rect.a);

    requestAnimationFrame(draw);
  };
  requestAnimationFrame(draw);
});
