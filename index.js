
function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if(array.length === 0)
    return "There is nobody waiting to be served!"
  else
    var name = array.splice(0, 1)
    return `Currently serving ${name}.`

}

function currentLine(line) {
  if(line.length === 0)
    return "The line is currently empty."
  else{
    var string = "The line is currently: "
      line.forEach(function(name, index){
          var position = index + 1
          string += `${position}. ` + `${name}, `
        })
        debugger;
    // var x = string.substring(0, string.length - 1);
    return string.substring(0, string.length - 2);

  }

}
