var katzDeli = [];


function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}


function nowServing(katzDeli) {
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}




 function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0) {
     return "The line is currently empty.";
   }
   else {
     var current_line = `The line is currently: `
     var i = 0
     var array = []
     while (i < katzDeliLine.length) {
       array.push(`${i+1}. ${katzDeliLine[i]}`)
       i++
     }
   }
   return current_line + array.join(", ")
 }
