status = "";

function preload(){
    img = loadImage("kitchen_items.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.position(350,250);
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function modelLoaded() { 
    console.log(" Model Loaded! :)");
    status= true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    console.log(results);
    objects= results;
}
function draw(){
    image(img,0,0,640,420);
}