var deliLine = [];

function takeANumber(deliLine, newCustomer){
  deliLine.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;

  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array){
  var lineTag = "The line is currently";
  if (array.length == 0) {
    return `${lineTag} empty.`
  } else {
    lineTag = `${lineTag}: `
    for (var i = 0; i < array.length -1; i ++) {
      lineTag = lineTag + `${i+1}. ${array[i]}, `
    }
    lineTag = `${lineTag}${i+1}. ${array[i]}`
  }
  return lineTag;
}
