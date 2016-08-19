function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty.";
  }else {
      var announcement = "The line is currently: ";
      line.forEach(function(name, index){
        announcement += ((index + 1) + ". " + name);
        if (index != (line.length - 1)) {
          announcement += ", ";}
      });
      return announcement;
  }
}

function nowServing(line){
  if (line.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    var customer = line.splice(0, 1);
    return "Currently serving " + customer + ".";
  }
}

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}
