var ground, groundImg;

var mouse, mouseImg, mouseImg4, mouse_run;

var cat, catImg1, catImg4, cat_running;

function preload() {
    //load the images here

    groundImg = loadImage("garden.png");

    mouseImg = loadAnimation("mouse1.png");

    mouseImg4 = loadAnimation("mouse4.png");

    mouse_run = loadAnimation("mouse2.png", "mouse3.png");

    catImg1 = loadAnimation("cat1.png");

    catImg4 = loadAnimation("cat4.png");

    cat_running = loadAnimation("cat2.png", "cat3.png");

}

function setup(){
    createCanvas(700,500);
    
    ground = createSprite(350, 250);
    ground.addImage("groundImg", groundImg);
    ground.scale = 0.7;

    cat = createSprite(600, 400, 20, 100);
    cat.addAnimation("catImg1", catImg1);
    cat.scale = 0.1;

    mouse = createSprite(200, 400, 10, 40);
    mouse.addAnimation("mouseImg", mouseImg);
    mouse.scale = 0.1;

}

function draw() {

   // console.log(tom.x - jerry.x);

    background("white");

if (cat.x - mouse.x < cat.width / 2 - mouse.width / 2) {
        cat.velocityX = 0;
        cat.addAnimation("catImg4", catImg4);
        cat.changeAnimation("catImg4");
        cat.x = 300;

        mouse.addAnimation("mouseImg4",mouseImg4);
        mouse.changeAnimation("mouseImg4");
       
    }

    drawSprites();
}

function keyPressed() {
    
    if (keyCode === LEFT_ARROW) {

        cat.velocityX = -5;
        cat.addAnimation("cat_running", cat_running);
        cat.changeAnimation("cat_running");

        mouse.addAnimation("mouse_run", mouse_run);
        mouse.changeAnimation("mouse_run");
    }
    
}
