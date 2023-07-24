var canvas;
var video;
var posenet;
var posX = 0;
var posY = 0;
var diferenca = 0;
var posXpulcoD = 0;
var posXpulcoE = 0;

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Posenet foi inicializado")
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        posX = results[0].pose.nose.x;
        posY = results[0].pose.nose.y;
        posXpulcoD = results[0].pose.rightWrist.x;
        posXpulcoE = results[0].pose.leftWrist.x;
        diferenca = floor(posXpulcoE - posXpulcoD);
    }

    function draw() {
        background("green");
        fill("red");
        stroke("gray");
        square(posX, posY, diferenca);
        document.getElementById("squareSide").innerHTML = "Largura e altura serão = " + diferenca +" px"
    }
}

