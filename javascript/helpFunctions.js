/**
 * fetchText
 * Fetch text from .xml file and print it to canvas
 * @param ID, object
 *      ID = what id does the object you want to print the text on have
 *      Object = what animal? (cow,horse,pig..)
 * **/
var xhttp = new XMLHttpRequest();
function fetchText(ID, object) {
    xhttp.open("GET", "animal.xml", true);
    xhttp.send();


    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp, ID, object);
        }
    };
}
/**
 * myFunction
 * Create the table for text when animal is pressed
 * @param ID, object, xml
 *      ID = what id does the object you want to print the text on have
 *      Object = what animal? (cow,horse,pig..)
 *      xml = variable with xml file loaded.
 * **/
function myFunction(xml, ID, object) {
    if (document.getElementById('tempTable') != null) {
        rem = document.getElementById('tempTable');
        div = rem.parentNode;
        div.removeChild(rem);
    }
    //initial values, creating the table for the text.
    var node;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName(object);
    z = document.getElementById(ID);
    console.log(x[0].childNodes);
    var table = document.createElement('table');
    table.setAttribute('ID', 'tempTable');
    var tableBody = document.createElement('tbody'); //body
    var rowFirst = document.createElement('tr'); //first row
    var cell1 = document.createElement('td'); //first row
    var cell2 = document.createElement('td'); // animal cell
    cell2.setAttribute('ID', 'animalImage');
    var nodeAnimal = returnAnimal(object); // animal node
    cell2.appendChild(nodeAnimal);

    //Find the text from the xml file.
    for (var i = 1; i < x[0].childNodes.length; i = i + 2) {
        node = document.createTextNode(x[0].childNodes[i].innerHTML);
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.appendChild(node);
        cell.setAttribute('class', 'modelClass');
        row.appendChild(cell);
        cell1.appendChild(row);
    }
    //Append text to cell.
    rowFirst.appendChild(cell1);
    rowFirst.appendChild(cell2);
    tableBody.appendChild(rowFirst);
    table.appendChild(tableBody);
    z.appendChild(table);
}
/**
 * returnAnimal
 * helpfunction for fetchText, return animal image
 * @param object
 *      Object = what animal? (cow,horse,pig..)
 * **/
function returnAnimal(object) {
    var image;
    if (object == 'horse') {
        image = document.createElement('img');
        image.src = "../images/horse3.png";
        image.height = 200;
        image.width = 200;
        return image;
    } else if (object == 'pig') {
        image = document.createElement('img');
        image.src = "../images/pig.png";
        image.height = 200;
        image.width = 200;
        return image;
    } else if(object == 'cow') {
        image = document.createElement('img');
        image.src = "../images/cow.png";
        image.height = 250;
        image.width = 250;
        return image;
    } else {
        return null;
    }
}