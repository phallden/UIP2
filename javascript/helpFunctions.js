/**
 * createObject
 * create object obj with id = objId, class (if wanted) objClass
 * @param element,obj,odObject,objClass
 *      pElement = parentElement
 *      obj = what kind of element, CANVAS, div, etc...
 *      objId = wanted object ID
 *      objClass = (alternativ) wanted object class
 * **/
function createObject(pElement,obj,objId,objClass) {
    var object = document.getElementById(pElement);
    var x = object.createElement(obj);
    x.id = objId;
    if(objClass != null){
        x.className = objClass;
    }
    return x;
}


