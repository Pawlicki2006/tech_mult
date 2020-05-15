document.addEventListener("DOMContentLoaded", function () {
  const ref = {
    add: $("#add"),
    clear: $("#clear"),
    container: $("#container"),
    textarea: $("#textarea"),
  };

  ref.add.click(function () {
    let newString = ref.container.html() + " " + ref.textarea.val();
    ref.container.html(newString);
    ref.textarea.val("")
  });

  ref.clear.click(function () {
      ref.container.html("");
  })
});
