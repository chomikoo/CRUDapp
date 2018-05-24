// scripts.js/

(function($) {
 	"use strict";

 	var page = 1;

 	getPageData();

 	$('#addNew').on('click', function(){
 		$('#tableManager').modal('show');
 	});


 	$('#modalSave').on('click', function(e) {
 		var key = e.target.id;
		// manageData(key);
 	});


 	// GET DATA
 	function getPageData() {
 		// console.log('page ' + data);
 		$.ajax({
 			dataType: 'json',
 			method: 'GET',
 			url: 'api/getData.php',
 			data: {
 				page: page
 			},
 		})
 		.done(function(data){
 			console.log('getPageData ' + data.total);
 			manageRow(data.data);
 		})
 		.fail(function(jqXHR, textStatus){
 			console.log('fail  ' + textStatus);
 		})
 	}

 	// PRINT ITEMS 
	function manageRow(data) {
		var rows = '';

		$.each( data, function(key, value) {
			rows += '<tr>';
			rows += '<td>' + value.title + '</td>';
			rows += '<td>' + value.description + '</td>';
			rows += '<td data-id="' + value.id + '">';
			rows += '<button data-toggle="modal" data-target="#updateData" class="btn btn-primary edit-item">Edit</button>';
			rows += '<button class="btn btn-danger remove-item">Delete</button>';
			rows += '</tr>';
		});

		$('#table-body').html(rows);
	}

	// Create new item
	$('#modalSave').on('click', function(e) {
		e.preventDefault();
		var createItemModal = $('#createItem');
		var form_action = createItemModal.find('form').attr('action');
		var title = createItemModal.find('input[name="title"]');
		var description = createItemModal.find('textarea[name="description"]');



		if(validateFields(title) && validateFields(description)) {
			// console.log('url ' + form_action);
			$.ajax({
				dataType: 'text',
				type: 'POST',
				url: form_action,
				data: {
					title: title.val(),
					description: description.val(),
				}
			})
			 .done(function(data, textStatus, jqXHR){ //same as .success (depricated as of 1.8)
				// 	console.log('done ' + data)
				title.val('');
				description.val('');
				getPageData();

				$('.modal').modal('hide');
			  })
			  .fail(function(jqXHR, textStatus, errorThrown){ //replaces .error
			    console.log("error");
			    console.dir(textStatus);
			  })
		
		}
	});

	// REMOVE
	$(document).on('click', '.remove-item', function(){
		console.log('remove');
		var id = $(this).parent('td').data('id');
		var removeElemen = $(this).parents('tr');

		$.ajax({
			dataType: 'json',
			type: 'POST',
			url: 'api/delete.php',
			data: {
				id: id
			}
		})
		.done(function(data){
			removeElemen.remove();

			getPageData();
		})
	});

	// EDIT
	$(document).on('click', '.edit-item', function(){
		var id = $(this).parent('td').data('id');
		var title = $(this).parent('td').prev('td').prev('td').text();
		var description = $(this).parent('td').prev('td').text();
		var editItem = $('#updateData');

		console.log('#edit ' + id );

		editItem.find('input[name="title"]').val(title);
		editItem.find('textarea[name="description"]').val(description);
		editItem.find('.edit-id').val(id);

	});


	$('#modalUpdate').on('click', function(e) {
		e.preventDefault();

		var editItem = $('#updateData');
		var form_action = editItem.find('form').attr('action');

		var title = editItem.find('input[name="title"]');
		var description = editItem.find('textarea[name="description"]');
		var id = editItem.find('.edit-id').val();

			if(validateFields(title) && validateFields(description)) {
				console.log(id,title.val(),description.val())

				$.ajax({
					dataType: 'text',
					type: 'POST',
					url: form_action,
					data: {
						title: title.val(),
						description: description.val(),
						id: id
					}
				})
				.done(function(data) {
					getPageData();
					$('.modal').modal('hide');
				})
				.fail(function(jqXHR, textStatus, errorThrown){
					console.log('Update - fail ' + textStatus)
				})
			}

	

	})

 	// VALIDATE INPUT
 	function validateFields(field) {
 		if(field.val() === '') {
 			field.addClass('invalid');
 			return false;
 		} else {
 			field.removeClass('invalid');
 			return true;
 		}
 	}




 })(jQuery);