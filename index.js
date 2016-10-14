var katzDeliLine = [];

function takeANumber(deliLine, person) {
  deliLine.push(person);
  return `Welcome, ${person}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    let line = 'The line is currently: ';

    for (let i = 0; i < deliLine.length; i++) {
      line += `${i + 1}. ${deliLine[i]}, `;
    }

    // remove last comma from final string
    return line.replace(/,\s*$/, '');
  }
}
