var selectedRow = null

function onFormSubmit() {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    $('#exampleModal').modal('hide');
    return false;
}

function readFormData() {
    var formData = {};
    formData["user_id"] = document.getElementById("user_id").value;
	formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("userList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
	
       $('#userList').append(" <td><input type='checkbox' id='check"+counter+"' class='check_inner' value='"+newRow[counter].id+"' name='check"+counter+"'></td>");
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.user_id;
	cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<button onClick="onEdit(this)">Edit</button>  ||  
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
   
    document.getElementById("user_id").value = "";
	document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
	$("#exampleModal").modal({
        backdrop: 'static',
        keyboard: false
    });
    document.getElementById("user_id").value = selectedRow.cells[0].innerHTML;
	document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.user_id;
	selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("userList").deleteRow(row.rowIndex);
        resetForm();
    }
}




