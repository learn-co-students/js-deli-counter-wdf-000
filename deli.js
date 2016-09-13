var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function currentLine(katzDeliLineine) {
  if (katzDeliLineine.length < 1)
    return "The line is currently empty.";
  else
    for (var i=0; i < katzDeliLineine.length; i++) {
      katzDeliLineine[i] = `${i + 1}. ${katzDeliLineine[i]}`
    };
    return `The line is currently: ${katzDeliLineine.join(", ")}`;
}

function nowServing(katzDeliLineine) {
  if (katzDeliLineine.length < 1)
    return "There is nobody waiting to be served!";
  else
    var name = katzDeliLineine.splice(0, 1);
    return `Currently serving ${name}.`;
}
