
function takeANumber(deli, customer) {
  deli.push(customer);
  return "Welcome, " + customer + ". You are number " + deli.length + " in line.";
}

function nowServing(deli){

  if (!deli.length) {
    return "There is nobody waiting to be served!"
  }else {
    return "Currently serving "+ deli.shift() + "."

  }
}

function currentLine(deli){
  if (!deli.length) {
    return "The line is currently empty."
  }else {
    var newDeli = ["The line is currently:"]
    for (var i = 0; i < deli.length; i++) {
      if (i+1 < deli.length) {
        newDeli.push(" "+(i+1)+". "+deli[i]+",")
      }else {
        newDeli.push(" "+(i+1)+". "+deli[i])
      }
    }
    return newDeli.join("");
  }
}
