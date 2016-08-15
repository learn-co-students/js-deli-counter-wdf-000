var ketzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function currentLine(line) {
  if (line.length < 1)
    return "The line is currently empty."
  else
    for (var i=0; i < line.length; i++) {
      line[i] = (i + 1) + ". " + line[i]
    }
  
    return "The line is currently: " + line.join(", ")
}

function nowServing (line) {
  if (line.length > 0) { 
    name = line[0];
    line.splice(0,1);
    return "Currently serving " + name + "." 
  }
  else
    return "There is nobody waiting to be served!"

}
