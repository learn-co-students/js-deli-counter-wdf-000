
var deliLine = [];

function takeANumber(deliLine, name){
  deliLine.push(name);
   return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}


function nowServing(deliLine){
  if ( deliLine.length === 0){
    return "There is nobody waiting to be served!";}
  else {
  var name = deliLine.splice(0, 1);
  return "Currently serving" + " " + name + ".";}
}

function currentLine(deliLine){
  if (deliLine.length === 0){
    return "The line is currently empty.";
  }
  else {
    var arr = [];
    deliLine.forEach(function(name, index){
      var num = index + 1;
      arr.push(`${num}. ${name}`);
    })
    return "The line is currently:" + " " + arr.join(", ");
  }
}
