var hr, min, sec;
var hrAngle, minAngle, secAngle; 

function setup(){
        var canvas = createCanvas(400,400); 
        canvas.position(600,100);
    angleMode(DEGREES);   
}

function draw(){
    background(0);


    text(mouseX + " ,"+ mouseY ,mouseX,mouseY);

    fill("white")
    textSize(30)
    text("12" ,180,100);
    text("6" ,180,330);
    text("3" ,310,210);
    text("9" ,80,210);

    translate(200,200)
    rotate(-90)

    
    hr = hour();
    min = minute();
    sec = second();

    secAngle = map(sec, 0, 60, 0, 360);
    minAngle = map(min,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    push();
    rotate(secAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()


    push();
    rotate(minAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()


    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,255,255);
    point(0,0)

    strokeWeight(10);
    noFill();

    stroke(255,0,0);
   arc(0,0,300,300,0,secAngle);

    stroke(0,255,0);
    arc(0,0,280,280,0,minAngle);


    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}