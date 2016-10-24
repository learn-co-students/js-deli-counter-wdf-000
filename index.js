function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var currentlyServing = katzDeliLine.shift();
    return `Currently serving ${currentlyServing}.`;
  }
}

function currentLine(currentLine){
  if(currentLine.length === 0){
    return "The line is currently empty."
  } else {
    var line = "The line is currently: ";
    var formattedLine = [];
    currentLine.forEach(function(name, index) {
      var number = index + 1;
      formattedLine.push(`${number}. ${name}`);
    });
    return line + formattedLine.join(", ");
  }
}
