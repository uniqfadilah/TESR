const array = [[0,2,3,4,6,8,9,11,13],[0,3,6,8,10,11,13],[0,2,4,6,9,10,11,13],[0,2,3,4,6,8,10,11,13],[0,2,3,4,6,8,9,11,13]];
const median = 2

function diff (num1, num2) {
    if (num1 > num2) {
      return num1 - num2
    } else {
      return num2 - num1
    }
  }
function TransformArray(array){
    for(let index in array){
        array[index][0] = '-'
        array[index][1] = 'x'
        array[index][2] == 6 ?array[index][2]='x':array[index][2]='-'
        array[index][3] == 6 ?array[index][3]='x':array[index][3]='-'
        array[index][4] == 10 ?array[index][4]='x':array[index][4]='-'
        array[index][5] = 'x'
        array[index][6] = '-'
        array[index][7] = 'x'
        index == median ? array[index][8] = 'x':array[index][8] = '-'
        diff(index,median) == 1 ? array[index][9] = 'x':array[index][9] = '-'
        diff(index,median) == 2 ? array[index][10] = 'x':array[index][10] = '-'
        array[index][11] = '-'
        array[index][12] = 'x'
        array[index][13] = '-'
        
    }
    createTable(array)
    
}
function createTable(array) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    array.forEach(function(rowData) {
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
TransformArray(array)
