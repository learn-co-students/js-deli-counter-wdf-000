function takeANumber(array,person) {
    array.push(person)
    return `Welcome, ${person}. You are number ${array.length} in line.`
}

function nowServing(array){
  if (array.length == 0)
  {
    return "There is nobody waiting to be served!"
  } else{
    return `Currently serving ${array[0]}.`
    array[0].splice(0,1)
  }

}

function currentLine(line){
  if (line.length == 0)
  {
    return "The line is currently empty."
  } else{

  }

}
