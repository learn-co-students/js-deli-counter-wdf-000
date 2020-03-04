function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var name = katzDeliLine.splice(0, 1);
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return 'The line is currently empty.';
  } else {
    var indexedNames = []
    katzDeliLine.forEach(function(name, index) {
      indexedNames.push(`${index + 1}. ${name}`);
    });
    return 'The line is currently: ' + indexedNames.join(`, `);
  }
}
