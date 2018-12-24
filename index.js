///
///
/// Deli Counter
///
///
///

// add solution here

var katzDeliLine = [];

// adds person to end of line.  return greeting and line position #
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

// if empty runs first statement.  otherwise, announces current customer and shifts order
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}


// says who is in line and their current position.  removes people as they're served
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    let queuePosition = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      queuePosition.push( ` ${i + 1}. ${katzDeliLine[i]}` );
    }
    return `The line is currently:${queuePosition}`
  }
}


let linePosition = 1;

function takeANumber(katzDeliLine){
  if (katzDeliLine.length = 1) {
    rturn 'Welcome! You're ticken number #1
  }
}

takeANumber(katzDeliLine) // "Welcome! You're ticket number #1" [1]
takeANumber(katzDeliLine) // "Welcome! You're ticket number #2" [1,2]

nowServing(katzDeliLine) // Currently serving #1 [2]
nowServing(katzDeliLine) // Currently serving #2 []

takeANumber(katzDeliLine) // "Welcome! You're ticket number #3" [3]
