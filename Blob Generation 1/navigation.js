var closestPoint = {
    x: 0,
    y: 0
}

function sense() {

    if (coordinates.length == 0) {
        console.log("food extinguished")
        console.log("Strength:" + animalControllerObject.vitals.strength);
        return;
    }

    //find if a point lies inside the circle
    var x, y;

    var inRange = [];
    for (var i = 0; i < coordinates.length; i++) {
        x = coordinates[i].x;
        y = coordinates[i].y;
        var x1 = animalControllerObject.coordinates.x;
        var y1 = animalControllerObject.coordinates.y;
        var radius = animalControllerObject.navigation.range;
        if (((x - x1) * (x - x1) + (y - y1) * (y - y1)) <= (radius * radius)) {
            inRange.push(coordinates[i]);
        }
    }

    if (inRange.length == 0) {
        inRange.push(coordinates[0]);
    }

    //find the closest point
    var min = Number.MAX_SAFE_INTEGER;

    inRange.forEach((coordinate) => {
        if (distance(coordinate) < min) {
            min = distance(coordinate);
            closestPoint = coordinate;
        }
    })

    console.log(closestPoint);
    // console.log(min);
    drawPoint(closestPoint.x, closestPoint.y, foodControllerObject.food.size, "blue")

    //get direction

    if (closestPoint.x > animalControllerObject.coordinates.x && closestPoint.y == animalControllerObject.coordinates.y) {
        setTimeout(() => {
            moveRight(closestPoint);
        }, controllerObject.navigation.delay);

    } else if (closestPoint.x < animalControllerObject.coordinates.x && closestPoint.y == animalControllerObject.coordinates.y) {
        setTimeout(() => {
            moveLeft(closestPoint);
        }, controllerObject.navigation.delay);
    }
    if (closestPoint.x == animalControllerObject.coordinates.x && closestPoint.y < animalControllerObject.coordinates.y) {
        setTimeout(() => {
            moveUp(closestPoint);
        }, controllerObject.navigation.delay);
    } else if (closestPoint.x == animalControllerObject.coordinates.x && closestPoint.y > animalControllerObject.coordinates.y) {
        setTimeout(() => {
            moveDown(closestPoint);
        }, controllerObject.navigation.delay);
    }
    //diagonal
    if (closestPoint.x > animalControllerObject.coordinates.x && closestPoint.y < animalControllerObject.coordinates.y) {
        setTimeout(() => {
            moveUpRight(closestPoint);
        }, controllerObject.navigation.delay);

    } else if (closestPoint.x < animalControllerObject.coordinates.x && closestPoint.y < animalControllerObject.coordinates.y) {
        setTimeout(() => {
            moveUpLeft(closestPoint);
        }, controllerObject.navigation.delay);
    }
    if (closestPoint.x > animalControllerObject.coordinates.x && closestPoint.y > animalControllerObject.coordinates.y) {
        setTimeout(() => {
            moveDownRight(closestPoint);
        }, controllerObject.navigation.delay);
    } else if (closestPoint.x < animalControllerObject.coordinates.x && closestPoint.y > animalControllerObject.coordinates.y) {
        setTimeout(() => {
            moveDownLeft(closestPoint);
        }, controllerObject.navigation.delay);
    }
}

function distance(coordinate) {
    var x1 = animalControllerObject.coordinates.x;
    var y1 = animalControllerObject.coordinates.y;
    return Math.sqrt(((x1 - coordinate.x) * (x1 - coordinate.x)) + ((y1 - coordinate.y) * (y1 - coordinate.y)));
}