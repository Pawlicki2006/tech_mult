document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", function () {
    $("#div").fadeToggle(3000, "linear");
  });
});
