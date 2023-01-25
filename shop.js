function loadProducts() {

    var table = document.createElement("table");

    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 3; j++) {
            var cell = document.createElement("td");

            const node = document.getElementById("card");
            const clone = node.cloneNode(true);
            cell.appendChild(clone);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);


}