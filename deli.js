function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    var info = "The line is currently: ";
    line.forEach(function(person, index) {
      info += ((index + 1) + ". " + person);
      if (index != (line.length - 1)) {
        info += ", ";
      }
    });
    return info
  }
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    person = line.splice(0, 1)
    return "Currently serving " + person + ".";
  } 
}

function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}