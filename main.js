song =
leftWristX = 
leftWristY = 
rightWristX = 
rightWristY = 

function setup(){
    canvas = createCanvas(650,650);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log('Posenet is initialized!');
}

function preload()
{
	song= loadSound("music.mp3");
}

function draw(){
    image(video, 0, 0, 650, 650);
}

function gotPoses(){
    if(results.length=0);{
        console.log(results);
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log("leftWristX= "+leftWristX+ "leftWristY="+leftWristY);
        rightWristX = result[0].pose.leftWrist.x;
        rightWristY = result[0].pose.leftWrist.y;
        console.log("rightWristX= "+rightWristX+ "rightWristY="+rightWristY);
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
};