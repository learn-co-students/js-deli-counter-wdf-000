var katzDeli = []

function takeANumber(katzDeliLine, name){
	katzDeliLine.push(name)
	var number = katzDeliLine.length
	return `Welcome, ${name}. You are number ${number} in line.`
};

function nowServing(katzDeliLine){
	return katzDeliLine.length === 0 ? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
	if (katzDeliLine.length === 0){
		return "The line is currently empty."
	}
	else{
		var name = []
		katzDeliLine.forEach(function(e,i){
			name.push(`${i+1}. ${e}`);
		});
		return "The line is currently: " + name.join(`, `);
	}
}