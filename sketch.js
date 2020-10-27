var bullet, wall_sprite, wall_sprite_img;
var Dmg;
// var input_speed = document.getElementById("speed_input").value;

function preload() {
    wall_sprite_img = loadImage("sprite_0.png");
    init_car_img = loadImage("init_car.png");
    green_car_img = loadImage("green_car.png");
    red_car_img = loadImage("red_car.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //creating car sprite
    bullet = createSprite(10, windowHeight / 2, random(40, 80), random(20, 40));
    bullet.velocityX = random(233, 321);
    bullet.setCollider("rectangle", 0, 0, bullet.width, bullet.height);
    bullet.debug = true;
    bullet.scale = 0.5;
    bullet_weight = random(30, 52);

    //creating wall sprite

    wall_sprite = createSprite(windowWidth - 80, windowHeight / 2, random(22, 83));
    // wall_sprite.addImage(wall_sprite_img);
    wall_sprite.debug = true;
    wall_sprite.scale = 3;
    // wall_sprite.shapeColor = "green";

    //Dmg
    Dmg = 0.5 * bullet_weight * bullet.velocityX * bullet.velocityX / (wall_sprite.width * wall_sprite.width * wall_sprite.width);
}

function draw() {
    background(0, 0, 0);

    if (bullet.x - bullet.width / 2 > wall_sprite.x - wall_sprite.width / 2) {
        bullet.velocityX = 0;

        if (Dmg > 10) {
            wall_sprite.shapeColor = "red";
        } else {
            wall_sprite.shapeColor = "green";
        }

    }

    // text("Damage Taken : " + Dmg, 40, 100);

    drawSprites();
}

function car_vel() {
    draw();
    var input_speed = document.getElementById("speed_input").value;
    bullet.x = 10;
    bullet.y = windowHeight / 2;
    bullet.velocityX = input_speed;
    isTouching(bullet, wall_sprite);
    bullet.collide(wall_sprite);
}

function Dmg_out_f() {
    var Dmg_out = document.getElementsByTagName("output")[0];
    var Damage = Dmg;
    Dmg_out.style.color = "white";
    Dmg_out.innerHTML = Damage;
}