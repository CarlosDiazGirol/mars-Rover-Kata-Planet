var GRIDSIZE = 9;
var ROVERSIZE = 52;

// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N',
  position: {
    x: 0,
    y: 0
  },
  travelLog: [],
  domDiv: document.querySelector("#myrover")
};



// ======================
function redrawRover(rover) {
  console.log('redrawRover was called');

  var roverDegrees = 0; // Por defecto 'N'
  switch (rover.direction) {
    case 'W':
      roverDegrees = 270;
      break;
    case 'S':
      roverDegrees = 180;
      break;
    case 'E':
      roverDegrees = 90;
      break;
  }
  var roverLeft = rover.position.x * ROVERSIZE;
  var roverTop  = rover.position.y * ROVERSIZE;
  rover.domDiv.style.cssText = 'transform: rotate(' + roverDegrees + 'deg);' +
                               'left: ' + roverLeft + 'px;' + 
                               'top: '  + roverTop + 'px;';
}

function turnLeft(rover){
  console.log('turnLeft was called');

  var newDirection;
  switch (rover.direction) {
    case 'N':
      newDirection = 'W';
      break;
    case 'W':
      newDirection = 'S';
      break;
    case 'S':
      newDirection = 'E';
      break;
    case 'E':
      newDirection = 'N';
      break;
  }
  rover.direction = newDirection;
};

function turnRight(rover){ 
  console.log('turnRight was called');

  var newDirection;
  switch (rover.direction) {
    case 'N':
      newDirection = 'E';
      break;
    case 'W':
      newDirection = 'N';
      break;
    case 'S':
      newDirection = 'W';
      break;
    case 'E':
      newDirection = 'S';
      break;
  }
  rover.direction = newDirection;
};

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case 'N':
      if (rover.position.y > 0) {
        rover.position.y -= 1;
      }
      break;
    case 'W':
      if (rover.position.x > 0) {
        rover.position.x -= 1;
      }
      break;
    case 'S':
      if (rover.position.y < GRIDSIZE) {
        rover.position.y += 1;
      } 
      break;
    case 'E':
      if (rover.position.x < GRIDSIZE) {
        rover.position.x += 1;
      }    
      break;
  }
};

function moveBackwards(rover){
  console.log("moveBackWards was called");
  switch (rover.direction) {
  case 'N':
    if (rover.position.y < GRIDSIZE) {
      rover.position.y += 1;     
    } 
    break;
  case 'W':
    if (rover.position.x < GRIDSIZE) {
      rover.position.x += 1;
    } 
    break;
  case 'S':
    if (rover.position.y > 0) {
      rover.position.y -= 1;
    } 
    break;
  case 'E':
    if (rover.position.x > 0) {
      rover.position.x -= 1;
    }     
    break;
  }
};

function doMove(move, rover) {
  switch (move) {
    case 'l':
      turnLeft(rover);
      break;
    case 'r':
      turnRight(rover);
      break;
    case 'f':
      moveForward(rover);
      break;
    case 'b':
      moveBackwards(rover);
      break;
    default:
    console.log('error, imposible do all moves');
  } 
  redrawRover(rover);
  rover.travelLog.push(move);
} 

function doCommands(moves, rover) {
  var directions = moves.split('');
  for (i = 0; i < directions.length; i++) {
    move = directions[i];
    setDelay(move);
    doMove(move, rover);
  }
}

redrawRover(rover);

