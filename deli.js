function currentLine(line) {
  var line_names = "The line is currently: "
  if (line.length == 0) {
    return "The line is currently empty." 
  } else {
    line.forEach(function(name, index) {
      var num = index + 1;
      line_names = line_names + num + ". " + name + ", ";
    }); 
  line_names = line_names.slice(0, -2);
  return line_names;
  }
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = line.shift();
    return "Currently serving " + name + "."; 
  }
}

function takeANumber(deli, name) {
    deli.push(name)
    return "Welcome, " + name + "." + " You are number " + deli.length + " in line."
} 

