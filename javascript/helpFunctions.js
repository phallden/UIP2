/**
 * createObject
 * create object obj with id = objId, class (if wanted) objClass
 * @param element,obj,odObject,objClass
 *      pElement = parentElement
 *      obj = what kind of element, CANVAS, div, etc...
 *      objId = wanted object ID
 *      objClass = (alternativ) wanted object class
 * **/
function createObject(pElement, obj, objId, objClass) {
    var object = document.getElementById(pElement);
    var x = object.createElement(obj);
    x.id = objId;
    if (objClass != null) {
        x.className = objClass;
    }
    return x;
}

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
function myFunction(xml, ID, object) {
    if (document.getElementById('tempTable') != null) {
        rem = document.getElementById('tempTable');
        div = rem.parentNode;
        div.removeChild(rem);
    }
    var node;
    var prevText;
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

    for (var i = 1; i < x[0].childNodes.length; i = i + 2) {
        node = document.createTextNode(x[0].childNodes[i].innerHTML);
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.appendChild(node);
        cell.setAttribute('class', 'modelClass');
        row.appendChild(cell);
        cell1.appendChild(row);
    }
    rowFirst.appendChild(cell1);
    rowFirst.appendChild(cell2);
    tableBody.appendChild(rowFirst);
    table.appendChild(tableBody);
    z.appendChild(table);
}

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
        image.height = 200;
        image.width = 200;
        return image;
    } else {
        return null;
    }
}