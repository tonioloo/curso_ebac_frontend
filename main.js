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
  });
  $(document).on("click", ".todo-list input[type='checkbox']", function () {
    var listItem = $(this).closest("li");
    if (this.checked) {
      listItem.addClass("complete");
    } else {
      listItem.removeClass("complete");
    }
  });
});
