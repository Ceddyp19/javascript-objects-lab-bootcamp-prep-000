function updateObjectWithKeyAndValue(obj, key, value){
  newObj = Object.assign({}, obj = {prop: 1, prop2: 2});
  return newObj;
}
 


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}
//destructivelyUpdateObjectWitKeyAndValue(obj, prop2, 2);



function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj);
  delete newObj.prop;
  return newObj;
  
}



function destructivelyDeleteFromObjectByKey(obj, key){

delete obj.prop;
return obj;
}