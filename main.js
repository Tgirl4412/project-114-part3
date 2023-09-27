Right_eyeX=0;
Right_eyeY=0;

function preload() {
Right_eye = loadImage('https://i.postimg.cc/2j73bJBy/eyeball.png')
}

function setup() {
    canvas = createCanvas(300,300);;
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on ('pose' , gotPoses)
}

function draw(){
image(video, 0, 0, 300, 300);
image(Right_eye, Right_eyeX - 10, Right_eyeY -10, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        RiX = results[0].pose.Right_eye.x;
        noseY = results[0].pose.Right_eye.y;
        console.log("Right_eye x = " + Right_eyeX);
        console.log("Right eye y = " + Right_eyeY);
        console.log("Right eye x = " + results[0].pose.Right_eye.x);
        console.log("Right eye y = " + results[0].pose.Right_eye.y);
    }
}