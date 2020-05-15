document.addEventListener("DOMContentLoaded", function () {
  let state = -1;
  // -1 = left
  // 0 = inProgress
  // 1 = right

  const ref = {
    animate: $("#animate"),
    div1: $("#div1"),
    div2: $("#div2"),
    div3: $("#div3"),
  };

  ref.animate.click(function () {
    switch (state) {
      case -1: // left to right
        state = 0;
        ref.div1.animate({ left: "400px" }, 2000, function () {
          ref.div2.animate({ left: "400px" }, 2000, function () {
            ref.div3.animate({ left: "400px" }, 2000, function () {
              state = 1;
            });
          });
        });
        break;
      case 1:
        state = 0;
        ref.div3.animate({ left: "0px" }, 2000, function () {
          ref.div2.animate({ left: "0px" }, 2000, function () {
            ref.div1.animate({ left: "0px" }, 2000, function () {
              state = -1;
            });
          });
        });
        break;
    }
  });
});
