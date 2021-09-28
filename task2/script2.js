const array = [[0,1,2,3],[0,3,1,2],[1,2,3,4],[2,3,1,4],[0,2,2,3]]
function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
  createTable(array);

const table = document.querySelector('table');

let headerCell
for (let row of table.rows) {
    const firstCell = row.cells[0];
  
    if (!headerCell || firstCell.innerText !== headerCell.innerText) {
      headerCell = firstCell;
    } else {
      headerCell.rowSpan++;
      firstCell.remove();
    }

    let firstrow
    for (let index of row.cells){
        if(!firstrow || index.innerText !==firstrow.innerText){
            firstrow = index
        }else{
            index.colSpan++
            firstrow.remove()
        }
    }
}

