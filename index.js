function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.splice(0,1);
  }
  return `Currently serving ${serving}.`;
}

function currentLine(katzDeliLine){
  var line_string = "The line is currently:";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  katzDeliLine.forEach(function(person, index){
    line_string = line_string + " " + (index+1) + ". " + person + ",";
  });
  return line_string.slice(0, -1);
}
