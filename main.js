x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
appy = "";
speak_data = "";
to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  appy = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {


 console.log(event); 

 content = event.results[0][0].transcript;
 to_number = Number(content);
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    if(Number.isInteger(to_number)) {
      document.getElementById("status").innerHTML = "Started drawing apple";
      draw_apple = "set";
    }

    else {
      document.getElementById("status").innerHTML = "The speech has not recognized a number";
    }

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width-150, screen_height-150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 1107);
      y = Math.floor(Math.random() * 401);
      image(appy, x, y, 53, 47);
    }
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Congratulations! Now eat these apples and keep the doctor away!";
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}



