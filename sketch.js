//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
	dog = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database
  dog = createSprite(250,250,10,10);
  dog.addImage(dog)
  foodStock = database.ref("food")
  foodStock.on("value",ReadStock)
}


function draw() {  

  if(keyWentDown(UP_ARROW)){
     WriteStock(foodS)
     dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here
  fill("red")
  text("Food Remaining" + foodS,250,240)
  text("Click Up arrow key to feed the dog", 120, 60)
}

function ReadStock(data){
 foodS = data.val()
}

function WriteStock(x){
  if(x<= 0){
    x= 0
  }
  else {
    x = x-1
  }
  database.ref("/").update({
    food: x
  })
}


