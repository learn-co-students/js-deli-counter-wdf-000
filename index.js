function takeANumber(array, name) {
	array.push(name)
	return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array, name){
	if(array.length === 0){
		return "There is nobody waiting to be served!"
	} else {
		var name = array.splice(0, 1)
	    return `Currently serving ${name}.`
	}
}

function currentLine(line) {
  if(line.length === 0){
    return "The line is currently empty."
  } else{
    var string = "The line is currently:"
      line.forEach(function(customer, index){
      	string = string +" "+ (index + 1)+". " + customer + ",";
        });

    return string.slice(0, -1);
  }
}

