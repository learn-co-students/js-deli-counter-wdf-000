function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function currentLine(line){
  if (line.length == 0) {
    return "The line is currently empty."
  }
  return "The line is currently: " + Object.keys(line).map(i => (Number(i) + 1) + ". " +line[i]).join(", ");
}

function nowServing(line){
  return line.length == 0 ? "There is nobody waiting to be served!"
                          : "Currently serving " + line.shift()  + "."
}
