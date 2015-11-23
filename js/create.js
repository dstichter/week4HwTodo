$(document).ready(function(){
//hiding alert
$("#alertField").hide()

$("#addTodo").on("focus", function(){
  $("#alertField").hide()
});
//Add
$(".btn-block").on('click', function(e){
  e.preventDefault();
  if(formCheck() === false){
    return;
  }
  var toAdd = $("#addTodo").val();
  var newRow = $("<tr>");
  var createCheckBox = $("<input type='checkbox'>").addClass("checkbox");
  var createDeleteBox = $("<button>").addClass("btn btn-danger").append("X")
  var todoData = $("<td>").append(toAdd).addClass("col-md-10")
  var todoCB = $("<td>").append(createCheckBox).addClass("col-md-1");
  var todoDB = $("<td>").append(createDeleteBox).addClass("col-md-1");
  newRow.append(todoData).append(todoCB).append(todoDB);
  $("#todoTable").append(newRow);
});
//Delete
$("table").on("click", ".btn-danger", function() {
  $(this).parent().parent().remove();
});
//Checkbox
$("table").on("click", ".checkbox", function() {
  var row = $(this).parent().parent();
  var td = row.find("td:first")
  if(this.checked === true){
    $(td).addClass('strike');
    $(this).parent().remove();
    $(td).attr('colspan',"2");
    return
  }
});

function formCheck() {
  if($("#addTodo").val() === ""){
    $("#alertField").show()
    return false
  }
  else{
    return true
  }
}
});