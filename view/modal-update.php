<div id="updateData" class="modal fade">

	<div class="modal-dialog">
		<form class="modal-content" action="api/update.php" method="PUT">
			<input type="hidden" name="id" class="edit-id">

			<div class="modal-header">
				<h2 class="modal-title">Zaktualizuj wyzwanie</h2>
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
				
				<input id="modalUpdate" value="Update" class="btn btn-success">

			</div>

		</form>

	</div>

</div>