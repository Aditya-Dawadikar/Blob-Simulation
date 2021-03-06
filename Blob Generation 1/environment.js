var controllerObject = {
    field: {
        minX: 0,
        minY: 0,
        maxX: 200,
        maxY: 200,
        fieldColor: "white"
    },
    environment: {
        foodCount: 100,
        animalCount: 1
    },
    navigation: {
        delay: 100
    }
}

//controllers 
function draw() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, controllerObject.field.maxX, controllerObject.field.maxY);
    coordinates = [];
    initializaEnvironment();
}

function initializaEnvironment() {
    drawFood(controllerObject.environment.foodCount);
    drawAnimal(controllerObject.environment.animalCount);
    sense();
}

function drawPoint(x, y, pointSize, pointColor) {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = pointColor
    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
}

function clearPoint(x, y, pointSize, pointColor) {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = pointColor;
    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
}

function clearCanvas() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0, 0, controllerObject.field.maxX, controllerObject.field.maxY);
}

function reset() {
    location.reload();
}