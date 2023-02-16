var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

/*Leer datos de la tabla*/
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["membresia"] = document.getElementById("membresia").value;
    formData["deporte"] = document.getElementById("deporte").value;
    return formData;
}

/*Insertar datos en la tabla y botones de edición*/
function insertNewRecord(data) {
    var table = document.getElementById("clientList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.membresia;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.deporte;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                    <a onClick="onDelete(this)">Borrar</a>`;
}

/*Resetear la tabla*/
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("membresia").value = "";
    document.getElementById("deporte").value = "";
    selectedRow = null;
}

/*Editar datos*/
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("membresia").value = selectedRow.cells[2].innerHTML;
    document.getElementById("deporte").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.membresia;
    selectedRow.cells[3].innerHTML = formData.deporte;
}

/*Borrar datos*/
function onDelete(td) {
    if (confirm('¿Estás seguro de eliminar este dato?')) {
        row = td.parentElement.parentElement;
        document.getElementById("clientList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}