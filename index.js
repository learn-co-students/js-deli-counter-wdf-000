var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(deliLine) {
  if (deliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = deliLine.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(k) {
  if (k.length == 0) {
    return "The line is currently empty.";
  } else {
    var beg = "The line is currently: ";
    var array = [];
    k.forEach(function(n, i) {
      var num = i + 1;
      array.push(`${num}. ${n}`);
    });
    return beg + array.join(", ");
  }
}
