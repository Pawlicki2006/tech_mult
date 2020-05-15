document.addEventListener("DOMContentLoaded", function () {
  const refs = {
    div_1: document.getElementById("div_1"),
    div_2: document.getElementById("div_2"),
    div_3: document.getElementById("div_3"),
  };

  refs.div_1.addEventListener("click", function (e) {
    let actualValue = e.target.innerHTML;
    let parsed = parseInt(actualValue);
    if (isNaN(parsed)) {
      e.target.innerHTML = 0;
    } else {
      e.target.innerHTML = parsed + 1;
    }
  });

  refs.div_2.addEventListener("click", function (e) {
    let actualValue = e.target.innerHTML;
    let parsed = parseInt(actualValue);
    if (isNaN(parsed)) {
      e.target.innerHTML = 0;
    } else {
      e.target.innerHTML = parsed + 1;
    }
  });

  refs.div_3.addEventListener("click", function (e) {
    let actualValue = e.target.innerHTML;
    let parsed = parseInt(actualValue);
    if (isNaN(parsed)) {
      e.target.innerHTML = 0;
    } else {
      e.target.innerHTML = parsed + 1;
    }
  });
});
