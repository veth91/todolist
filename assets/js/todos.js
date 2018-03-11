//Check off Specific todos by clicking
$("ul").on('click', 'li', function(){
	$(this).toggleClass("completed");
})

//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

//Add new items to list if you click the plus button when the text field is nnot empty
$(".fa-plus-circle").click(function(){
	var value = $("input").val()
	if(value) { 
		$("input").val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + value + "</li>");
	} else {
	$("input[type='text']").fadeToggle();
	}
});