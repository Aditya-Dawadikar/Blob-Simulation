var closestPoint = {
    x: 0,
    y: 0
}

function sense() {
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
        //take a random decision
        console.log("no food in range");
        return
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
    drawPoint(closestPoint.x, closestPoint.y, 7, "blue")

    //get direction
    // if (closestPoint.x > animalControllerObject.coordinates.x && closestPoint.y == animalControllerObject.coordinates.y) {
    //     console.log("1");
    //     moveRight(closestPoint);
    // } else if (closestPoint.x < animalControllerObject.coordinates.x && closestPoint.y == animalControllerObject.coordinates.y) {
    //     console.log("2");
    //     moveLeft(closestPoint);
    // }
    // if (closestPoint.x == animalControllerObject.coordinates.x && closestPoint.y < animalControllerObject.coordinates.y) {
    //     console.log("3");
    //     moveUp(closestPoint);
    // } else if (closestPoint.x == animalControllerObject.coordinates.x && closestPoint.y > animalControllerObject.coordinates.y) {
    //     console.log("4");
    //     moveDown(closestPoint);
    // }

    if (closestPoint.x > animalControllerObject.coordinates.x) {
        setTimeout(() => {
            moveRight(closestPoint);
        }, 100);

    } else if (closestPoint.x < animalControllerObject.coordinates.x) {
        setTimeout(() => {
            moveLeft(closestPoint);
        }, 100);
    }
    if (closestPoint.x == animalControllerObject.coordinates.x) {
        setTimeout(() => {
            moveUp(closestPoint);
        }, 100);
    } else if (closestPoint.x == animalControllerObject.coordinates.x) {
        setTimeout(() => {
            moveDown(closestPoint);
        }, 100);
    }
}

function distance(coordinate) {
    var x1 = animalControllerObject.coordinates.x;
    var y1 = animalControllerObject.coordinates.y;
    return Math.sqrt(((x1 - coordinate.x) * (x1 - coordinate.x)) + ((y1 - coordinate.y) * (y1 - coordinate.y)));
}