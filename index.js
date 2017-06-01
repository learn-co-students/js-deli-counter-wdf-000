var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  if(katzDeliLine.length === 0){
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; 
  }
  else {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else {
    var result = "";
    katzDeliLine.forEach(function(name, index){
      var number = index + 1;
      if( number === katzDeliLine.length){
        result += (number + ". " + name );
      }
      else{
        result += (number + ". " + name + ", ");
      }
    });
      return `The line is currently: ${result}`;
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}
