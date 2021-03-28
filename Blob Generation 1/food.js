var foodControllerObject = {
    food: {
        color: "red",
        size: 4,
        clearSize: 5,
    },
}

var coordinates = [];

function drawFood(count) {
    var xCoordinate, yCoordinate;
    for (var i = 0; i < count; i++) {
        var xCoordinate = Math.floor(Math.random() * (controllerObject.field.maxX - controllerObject.field.minX) + controllerObject.field.minX);
        var yCoordinate = Math.floor(Math.random() * (controllerObject.field.maxY - controllerObject.field.minY) + controllerObject.field.minY);
        var coordinate = {
            x: xCoordinate,
            y: yCoordinate
        }
        coordinates.push(coordinate);
        drawPoint(xCoordinate, yCoordinate, foodControllerObject.food.size, foodControllerObject.food.color);
    }
}

function preserveFood() {
    for (var i = 0; i < coordinates.length; i++) {
        drawPoint(coordinates[i].x, coordinates[i].y, foodControllerObject.food.size, foodControllerObject.food.color)
    }
}

function clearAllFood() {
    for (var i = 0; i < coordinates.length; i++) {
        clearPoint(coordinates[i].x, coordinates[i].y, foodControllerObject.food.clearSize, controllerObject.field.fieldColor);
    }
    coordinates = [];
    preserveAnimal();
}

function clearFood(destination) {
    clearPoint(destination.x, destination.y, foodControllerObject.food.clearSize, controllerObject.field.fieldColor);
    preserveAnimal();
}