var lastItemClicked;
function addOnToDo () {
	var li = '<li class="list-group-item">' + $('#task').val() + '</li>';
	$("#ToDo").append(li);
	$('#task').val('');
}

$(document).ready(function(){
	$("#ToDo").on('click','li', function () {
		//alert('Clicked list. ' + $(this).attr('class'));
		if (lastItemClicked != null){
			lastItemClicked.removeClass( "active" );
		}
		if($(this).is('.active')) {
			$(this).removeClass( "active" );
		} else {
			$(this).addClass('active');
		}
		lastItemClicked = $(this);
	});
})

function swipeList() {
	if (lastItemClicked != null) {
		var li = '<li class="list-group-item">' + lastItemClicked.text() + '</li>';
		$("#done").append(li);
		lastItemClicked.remove();
		lastItemClicked = null;
	}
}

function removeItem(){
	lastItemClicked.remove();
}