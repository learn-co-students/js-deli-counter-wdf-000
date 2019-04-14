function takeANumber(array, name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}


function nowServing(array){
  if(array.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var removed_customer = array.splice(0, 1)
    return `Currently serving ${removed_customer}.`;
  }
}

function currentLine(array){
  if(array.length === 0){
    return "The line is currently empty.";
  } else {
    var string = "The line is currently: ";
    var newArray = [];
    var newString = "";
    array.forEach(function(cust, index) {
      var pos = index + 1;
      string += `${pos}. ` + `${cust}, `; 
    })
    newArray = string.split("")
    newArray.pop()
    newArray.pop()
    newString = newArray.join("")
    return newString;   

  }
}
