document.addEventListener("DOMContentLoaded", function () {
  let isDown = false;

  $(document).ready(function () {
    $("#btn1").click(function () {
      if (!isDown) {
        isDown = true;
        $("#box").animate(
          { top: "351px", height: "300px" },
          $("#input").val() * 1000
        );
      } else {
        isDown = false;
        $("#box").animate(
          { top: "90%", height: "1px" },
          $("#input").val() * 1000
        );
      }
    });
  });
});
