// var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else {
    var tmp =  katzDeli.shift();
    return `Currently serving ${tmp}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty."
  }
  var string = "The line is currently: ";
  katzDeliLine.forEach(function(name,index) {
    string = string + (index+1) + ". " + name + ", "
  });
  return string.substring(0,string.length-2);
}
