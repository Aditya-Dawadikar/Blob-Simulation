var animalControllerObject = {
    animal: {
        size: 10,
        clearSize: 12,
        color: "green",
        time: 5, //milliseconds
        step: 5 //pixels
    },
    coordinates: {
        x: 0,
        y: 0
    },
    navigation: {
        range: 50,
        color: "rgba(52, 235, 195, 0.5)"
    }
}

function drawAnimal(count) {
    var xCoordinate = Math.floor(Math.random() * (controllerObject.field.maxX - controllerObject.field.minX) + controllerObject.field.minX);
    var yCoordinate = Math.floor(Math.random() * (controllerObject.field.maxY - controllerObject.field.minY) + controllerObject.field.minY);
    animalControllerObject.coordinates.x = xCoordinate
    animalControllerObject.coordinates.y = yCoordinate
    drawPoint(xCoordinate, yCoordinate, animalControllerObject.navigation.range, animalControllerObject.navigation.color);
    drawPoint(xCoordinate, yCoordinate, animalControllerObject.animal.size, animalControllerObject.animal.color);
    console.log("animal coordinates:" + animalControllerObject.coordinates.x + "," + animalControllerObject.coordinates.y);
}

function preserveAnimal() {
    drawPoint(animalControllerObject.coordinates.x, animalControllerObject.coordinates.y, animalControllerObject.navigation.range, animalControllerObject.navigation.color);
    drawPoint(animalControllerObject.coordinates.x, animalControllerObject.coordinates.y, animalControllerObject.animal.size, animalControllerObject.animal.color);
}

function clearAnimal() {
    clearPoint(animalControllerObject.coordinates.x, animalControllerObject.coordinates.y, animalControllerObject.navigation.range + 2, controllerObject.field.fieldColor);
    clearPoint(animalControllerObject.coordinates.x, animalControllerObject.coordinates.y, animalControllerObject.animal.clearSize, controllerObject.field.fieldColor);
    preserveFood();
}

function rePaint() {
    clearAnimal();
    drawPoint(animalControllerObject.coordinates.x, animalControllerObject.coordinates.y, animalControllerObject.navigation.range, animalControllerObject.navigation.color);
    drawPoint(animalControllerObject.coordinates.x, animalControllerObject.coordinates.y, animalControllerObject.animal.size, animalControllerObject.animal.color);
}

/*
function moveRight() {
    var i = 0;
    var si = setInterval(function() {
        i++;
        animalControllerObject.coordinates.x = animalControllerObject.coordinates.x + 1;
        rePaint();
        if (i == animalControllerObject.animal.step) {
            clearInterval(si);
        }
    }, animalControllerObject.animal.time);
}

function moveLeft() {
    var i = 0;
    var si = setInterval(function() {
        i++;
        animalControllerObject.coordinates.x = animalControllerObject.coordinates.x - 1;
        rePaint();
        if (i == animalControllerObject.animal.step) {
            clearInterval(si);
        }
    }, animalControllerObject.animal.time);
}

function moveDown() {
    var i = 0;
    var si = setInterval(function() {
        i++;
        animalControllerObject.coordinates.y = animalControllerObject.coordinates.y + 1;
        rePaint();
        if (i == animalControllerObject.animal.step) {
            clearInterval(si);
        }
    }, animalControllerObject.animal.time);
}

function moveUp() {
    var i = 0;
    var si = setInterval(function() {
        i++;
        animalControllerObject.coordinates.y = animalControllerObject.coordinates.y - 1;
        rePaint();
        if (i == animalControllerObject.animal.step) {
            clearInterval(si);
        }
    }, animalControllerObject.animal.time);
}
*/



//something to use later for optimization
function moveRight(destination) {
    clearAnimal();
    animalControllerObject.coordinates.x = Math.min(animalControllerObject.coordinates.x + animalControllerObject.animal.step, destination.x);
    //base case: if we have reached
    if ((animalControllerObject.coordinates.x == destination.x) && (animalControllerObject.coordinates.y == destination.y)) {
        //eating logic
        var index = coordinates.indexOf(destination);
        coordinates.splice(index, 1);
        clearFood(destination)
    }
    rePaint();
    //else recurssion 
    sense()
}

function moveLeft(destination) {
    clearAnimal();
    animalControllerObject.coordinates.x = Math.max(animalControllerObject.coordinates.x - animalControllerObject.animal.step, destination.x);
    //base case: if we have reached
    if ((animalControllerObject.coordinates.x == destination.x) && (animalControllerObject.coordinates.y == destination.y)) {
        //eating logic
        var index = coordinates.indexOf(destination);
        coordinates.splice(index, 1);
        clearFood(destination)
    }
    rePaint();
    //else recurssion 
    sense()
}

function moveUp(destination) {
    clearAnimal();
    animalControllerObject.coordinates.y = Math.max(animalControllerObject.coordinates.y - animalControllerObject.animal.step, destination.y);
    //base case: if we have reached
    if ((animalControllerObject.coordinates.x == destination.x) && (animalControllerObject.coordinates.y == destination.y)) {
        //eating logic
        var index = coordinates.indexOf(destination);
        coordinates.splice(index, 1);
        clearFood(destination)
    }
    rePaint();
    //else recurssion 
    sense()
}

function moveDown(destination) {
    clearAnimal();
    animalControllerObject.coordinates.y = Math.min(animalControllerObject.coordinates.y + animalControllerObject.animal.step, destination.y);
    //base case: if we have reached
    if ((animalControllerObject.coordinates.x == destination.x) && (animalControllerObject.coordinates.y == destination.y)) {
        //eating logic
        var index = coordinates.indexOf(destination);
        coordinates.splice(index, 1);
        clearFood(destination)
    }
    rePaint();
    //else recurssion 
    sense()
}