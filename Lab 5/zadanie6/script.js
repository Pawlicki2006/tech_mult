document.addEventListener("DOMContentLoaded", function () {
  const ref = {
    add: $("#add"),
    clear: $("#clear"),
    container: $("#container"),
    textarea: $("#textarea"),
    amount: $("#amount"),
  };

  ref.add.click(function () {
    let newString = ref.container.html() + " " + ref.textarea.val();
    ref.container.html(newString);
    ref.textarea.val("")
  });

  ref.clear.click(function () {
      ref.container.html("");
  })

  ref.textarea.bind('input', function(e){
    let newString = e.target.value.length + "/200";
    ref.amount.html(newString);
  });
});
