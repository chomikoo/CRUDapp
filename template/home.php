<header class="container">
	<h1>CRUD Trainning</h1>
</header>

 <main class="container">
	<div class="row head">
 		<h2 class="col">MySQL Menager</h2>

		<button id="addNew" class="col btn btn-success " type="button" data-toggle="modal" data-target="#createItem">Add new</button>
	</div><!-- .head -->

 	<table class="table table-hover table-bordered">
 		
 		<thead>
 			<tr>
 				<td>Title</td>
 				<td>Description</td>
 				<td>Action</td>
 			</tr>
 		</thead>

 		<tbody id="table-body">
 			

 		</tbody>

 	</table>

 	<!-- Create modal -->
	<?php include 'view/modal.php' ?>
	<!-- Update modal -->
	<?php include 'view/modal-update.php' ?>
 </main>