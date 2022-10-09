objects=[];
status="";
img="";

function preload()
{
 img= loadImage("dog_cat.jpg");
}
function setup()
{
canvas = createCanvas(700,500);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";

}
function modelLoaded()
{
    status = true;
    console.log("model Loaded");
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
   
    }

    console.log(results);
    objects=results;

    
}
function draw()
{
image(img,0,0,700,500);
if(status !="" )
{
    for(i=0;i<objects.length;i++)
    {
        document.getElementById("status").innerHTML="status-objects detected";
        fill("green");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("green");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }
}

}

