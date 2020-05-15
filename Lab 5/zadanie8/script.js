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
    container: $("#container"),
  };

  $(".up").each(function () {
    $(this).click(function () {
      moveUp($(this).parent());
    });
  });

  $(".down").each(function () {
    $(this).click(function () {
      moveDown($(this).parent());
    });
  });

  ref.animate.click(function () {
    switch (state) {
      case -1: // left to right
        state = 0;
        ref.div1.animate({ marginLeft: "400px" }, 2000, function () {
          ref.div2.animate({ marginLeft: "400px" }, 2000, function () {
            ref.div3.animate({ marginLeft: "400px" }, 2000, function () {
              state = 1;
            });
          });
        });
        break;
      case 1:
        state = 0;
        ref.div3.animate({ marginLeft: "0px" }, 2000, function () {
          ref.div2.animate({ marginLeft: "0px" }, 2000, function () {
            ref.div1.animate({ marginLeft: "0px" }, 2000, function () {
              state = -1;
            });
          });
        });
        break;
    }
  });

  function moveUp(element) {
    let prev = element.prev();
    element.insertBefore(prev);
  }

  function moveDown(element) {
    let next = element.next();
    element.insertAfter(next);
  }
});
