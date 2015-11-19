$(document).ready(function(){

$(".btn-primary").on('click', function(e){
  e.preventDefault();

  var toAdd = $("#addTodo").val();

  var newRow = $("<tr>");
  var createCheckBox = $("<input type='checkbox'>").addClass("checkbox");
  var createDeleteBox = $("<button>").addClass("btn btn-danger").append("X")
  var todoData = $("<td>").append(toAdd)
  var todoCB = $("<td>").append(createCheckBox);
  var todoDB = $("<td>").append(createDeleteBox);
  newRow.append(todoData).append(todoCB).append(todoDB);
  $("tbody").append(newRow);
});
$("table").on("click", ".btn-danger", function() {
  $(this).parent().parent().remove();

});
$("table").on("click", ".checkbox", function() {
  var row = $(this).parent().parent();
  var td = row.find("td:first")
  if(this.checked === true){
    td.addClass("strike");
    return
  }
  if(this.checked === false){
    td.removeClass("strike");
  }

});

});