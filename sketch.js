const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
    background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here



}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")


    //change the data in JSON format
    var responseJson= await response.json()
    console.log("Time",responseJson)

    // write code slice the datetime
    var datetime= responseJson.datetime
    var hour=datetime.slice(11,13)

    console.log(hour)


    // add conditions to change the background images from sunrise to sunset
    if(hour>=06 && hour<=17){
       bg="sunrise.png"
      }else {bg="sunset.png"
      }
      
    //load the image in backgroundImg variable here

    backgroundImg = loadImage(bg);
   // console.log("backgroundImage",backgroundImg);

    
}    
    