document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.addEventListener("mousemove", function (e) {
    const offset = {
      x: canvas.getBoundingClientRect().left - 1,
      y: canvas.getBoundingClientRect().top - 1,
    };
    const coords = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };

    drawCoords(coords);
  });

  canvas.addEventListener ("mouseout", function(e){
      drawAlert();
  }, false);


  function drawCoords(coords) {
    const message = `${coords.x}, ${coords.y}`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "10px";
    ctx.fillText(message, 10, 10);
  }

  function drawAlert(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "10px";
    ctx.fillText("Kursor poza płótnem", 10, 10);
  }
});
