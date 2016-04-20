/**
 * createObject
 * create object obj with id = idobject, class (if wanted) objclass
 * @param
 *      element = parentElement
 *      obj = what kind of element, CANVAS, div, etc...
 *      idObject = wanted object ID
 *      objClass = (alternativ) wanted object class
 * **/
function createObject(element,obj,idObject,objClass) {
    var object = document.getElementById(element);
    var x = object.createElement(obj);
    x.id = idObject;
    if(objClass != null){
        x.className = objClass;
    }
    return x;
}


