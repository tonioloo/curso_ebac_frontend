$(document).ready(function () {
  var count = 0;
  $(".add").click(function () {
    var inputval = $(".form-control").val();
    if (inputval != "") {
      count++;

      $(".todo-list").append(
        '<li><div class="left-cont"><input type="checkbox" id="check-' +
          count +
          '" name="" /><label for="check-' +
          count +
          '"></label><span>' +
          inputval +
          '</span></div><span class="remove"><i class="material-icons">delete</i></span></li>'
      );
    }
    const TabelaTodo = document.querySelector("ul");

    TabelaTodo.addEventListener("click", function (e) {
      if (e.target.classList.contains("complete")) {
        e.target.classList.remove("complete");
      } else {
        e.target.classList.add("complete");
      }
    });
  });
});
