document.addEventListener("DOMContentLoaded", function () {
  const ref = {
    content: $("#content"),
    textarea: $("#textarea"),
    animate: $("#animate"),
  };

  ref.textarea.bind("input", function (e) {
    ref.content.html(e.target.value);
  });

  ref.animate.click(function () {
    ref.content.animate(
      {
        fontSize: "200px",
        opacity: 0,
      },
      2000,
      function () {
        ref.content.html("");
        ref.textarea.val("");
        ref.content.css({ opacity: "1", fontSize: "14px" });
      }
    );
  });
});
