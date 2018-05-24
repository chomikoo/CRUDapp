<div id="createItem" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="Dodaj nowe wyzwanie" aria-hidden="true" >

	<div class="modal-dialog">
		<form class="modal-content" action="api/create.php" method="POST">
			<div class="modal-header">
				<h2 class="modal-title">Dodaj nowe wyzwanie</h2>
			</div>

			<div class="modal-body">

				<div class="form-group">
					<label for="title">Nazwa wywania</label>
					<input name="title" type="text" class="form-control" >
				</div>

				<div class="form-group">
					<label for="description">Short description</label>
					<textarea name="description" class="form-control"></textarea>
				</div>
	
			</div>

			<div class="modal-footer">
				
				<input id="modalSave" value="Save" class="btn btn-success">

			</div>

		</form>

	</div>

</div>