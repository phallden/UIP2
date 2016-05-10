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
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName(object)[0];
    var y = x.childNodes[0];
    document.getElementById(ID).innerHTML = y.nodeValue;
}



