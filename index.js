var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  console.log(katzDeliLine);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  var nextPerson = null;
  // below conditional can be written as
  // ( !katzDeliLine.length )
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    // below in one line
    // return `text ${katzDeliLine.shift()}`
    nextPerson = katzDeliLine.shift();
    return `Currently serving ${nextPerson}.`;
  }
}

function currentLine(katzDeliLine) {
  var i = 0,
      output = "The line is currently: ";
  if ( katzDeliLine.length === 0 ) {
      return "The line is currently empty.";
  } else {
    while ( i < katzDeliLine.length) {
      output += `${i + 1}. ${katzDeliLine[i]}`;
      if (i < katzDeliLine.length - 1) {
        output += ", ";
      }
      i++;
    }
    return output;
  }
}

