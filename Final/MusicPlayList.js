// store List of song that are added in playlist
var listOfData = [];
// This is the function where we check in Array is it present or not to avoid duplication 
function onADD(id)
 {
    if (listOfData.indexOf(id) == -1)
     {
        var formData = {};
        formData["MusicName"] = id;
        insertNewRecord(formData);
        // pushing into array
        listOfData.push(id);
        // after add to array we reduce the opacity of the image and button 
        document.getElementById(id).setAttribute("style", "opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=50)");
        
    }
    // if it present in the array we alert the user about this
    else 
    {
        alert("you are already add this song");
    }
}
// this function will add to form present in right side in website
function insertNewRecord(data)
 {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.MusicName;
    cell2 = newRow.insertCell(1);
    // on click the X icon in right side we call onDelete function 
    cell2.innerHTML = `<a onClick="onDelete(this)"style="font-size: 23px;">X</a>`;
}

// this function will delet the record and unabel the button for add 
function onDelete(td) 
{

    row = td.parentElement.parentElement;
    let index = row.rowIndex - 1;

    //console.log(listOfData[index]);
    document.getElementById(listOfData[index]).setAttribute("style", "opacity:1; -moz-opacity:0.5; filter:alpha(opacity=50)");
    document.get

    document.getElementById("List").deleteRow(row.rowIndex);
    listOfData.splice(index, 1);
}