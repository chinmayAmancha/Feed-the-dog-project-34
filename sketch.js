var doggy,dog, happyDog;
var database;
var foodS, foodStock;
var data;

function preload()
{
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happyDog.png");
}

function setup() {
	createCanvas(500, 500);
  doggy = createSprite(200,200);
  doggy.addImage(dog);
  doggy.scale = "0.15";

  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);

  text("Press Up arrow to feed the dog milk");

  if(keyDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

  textSize("12");
  fill("black");
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

    data.ref("food/value").update({
      food:x
    })
}