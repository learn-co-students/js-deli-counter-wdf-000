var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var number = katzDeliLine.length
  return `Welcome, ${newName}. You are number ${number} in line.`
};

function nowServing(line) {
  if (!line.length)
    return "There is nobody waiting to be served!"
  else
    return (`Currently serving ${line.shift()}.`)

};

function currentLine(line) {
  if (!line.length) {
      return "The line is currently empty." }
  var line_array = []
  for(let i = 0; i < line.length; i++) {
      line_array.push(`${i+1}. ${line[i]}`)
    }
      return `The line is currently: ${line_array.join(', ')}`
};
