let isDown = false;

$(document).ready(function () {
  $("#flip").click(function () {
    if(!isDown) {
        $("#panel").slideDown("slow", function () {
            isDown = true;
        });
    }else{
        $("#panel").slideUp("slow", function () {
            isDown = false;
        });
    }
  });
});
