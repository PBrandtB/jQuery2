$(document).ready(function(){
	//above is the document ready function, allows us to load our app when the document loads
	//All code goes between the opening and closing of this funciton

	// This is the array for our list
	var listo = [];

	$('#newTaskForm').hide();
	

	// Below is the Constructor function for creating new items on the list.
	var Task = function(task){
		this.task = task;
		this.id = 'new';
	};

	var addTask = function(){
		if(task){
			task = new Task(task);
			listo.push(task);

			$('#newItemInput').val('');
			$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');

		}
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');

	};

	$('#saveNewItem').on('click', function (e){
		e.preventDefault();
		var task = $('#newItemInput').val().trim();
		addTask(task);
	});

	//Opens form
	$('newListItem').on('click', function(){
		$('#newTaksForm, #newListItem').fadeToggle('fast', 'linear');
	});

	//Closes form
	$('#cancel').on('click', function(){
		e.preventDefault();
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	});

	//changes status of an item from new to inProgress
	$(document).on('click', '#item', function (e){
		e.preventDefault();
		var task = this;
		advanceTask(task);
		this.id = 'inProgress';
		$('#currentList').append(this.outerHTML);

	});

	//changes status of an item from inProgress to archived
	$(document).on('click', '#item', function (e){
		e.preventDefault();
		var task = this;
		task.id = "archived"
		var changeIcon = task.outerHTML.replace('glypicon-arrow-rigth', 'glyphicon-remove');
		advanceTask(task);
		$('#archivedList').append(changeIcon);

	});

	//deletes the items on the list
	$(document).on('click', '#archived', function (e){
		e.preventDefault();
		var task = this;
		advanceTask(task);

	});


//below is the closing of the document ready function
})