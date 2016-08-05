function line_empty(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  	return true
  } else {
  	return false
  }
}

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (line_empty(katzDeliLine)) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.splice(0,1)}.`
}

function currentLine(katzDeliLine) {
  if (line_empty(katzDeliLine)) {
    return "The line is currently empty.";
  }
  var results = []
  katzDeliLine.forEach(function(letter, index) {
    results.push(`${index + 1}. ${letter}`)
  });
  return `The line is currently: ${results.join(", ")}`
}
