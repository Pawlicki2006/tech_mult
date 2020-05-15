$(document).ready(function () {
  $("#p1 .flip").each(function (i) {
    $(this).click(function (e) {
      console.log($("#p1 .panel")[i]);
      $("#p1 #p1-" + i).slideToggle("slow");
    });
  });

  $("#p2 .flip").each(function (i) {
    $(this).click(function (e) {
      console.log($("#p2 .panel")[i]);
      $("#p2 #p2-" + i).slideToggle("slow");
    });
  });

  $("#p3 .flip").each(function (i) {
    $(this).click(function (e) {
      console.log($("#p3 .panel")[i]);
      $("#p3 #p3-" + i).slideToggle("slow");
    });
  });

  $("#f1").click(function () {
    $("#p1").slideToggle("slow");
    hidePanel($("#p2"), $("#p3"));
  });

  $("#f2").click(function () {
    $("#p2").slideToggle("slow");
    hidePanel($("#p1"), $("#p3"));
  });

  $("#f3").click(function () {
    $("#p3").slideToggle("slow");
    hidePanel($("#p1"), $("#p2"));
  });
});

function hidePanel(...elements) {
  for (let element of elements) {
    element.children(".panel").each(function (i) {
      $(this).slideUp("slow");
    });

    element.slideUp("slow");
  }
}
