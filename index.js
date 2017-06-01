var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = katzDeliLine.shift()
    return "Currently serving " + serving + '.'
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    var text = "The line is currently:"
    for (var customer in line) {
     text += " " + (parseInt(customer)+1) + ". " + line[customer] + ','; 
    }
  }
  text = text.slice(0,-1)
  return text
}
