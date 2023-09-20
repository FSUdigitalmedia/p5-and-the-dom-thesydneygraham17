var myParagraph;
var myImage;
var button;
var textSizeSlider;

function setup() {
   createCanvas(1250, 600);
   myImage = createImg('https://i.pinimg.com/originals/bb/12/03/bb12038681429c0e313c3001a973ef0f.jpg');
  myImage.position(100, 100);
  myImage.size(200, 150);
  myParagraph = createP("html");
  myParagraph.position(0, 0);
  myParagraph.mouseClicked(makeRed);
  button = createButton('click me');
  button.position(0,0);
  button.mousePressed(buttonClickHandler);
  textSizeSlider = createSlider(12, 48, 24);
  textSizeSlider.position(20, height - 200);
  textSizeSlider.addClass("custom-slider"); 
  textSizeSlider.input(updateTextSize);
  myImage.doubleClicked(hideText); 
}
function buttonClickHandler() {
   changeParagraph();
   changeImagePosition();
}
function changeParagraph(){
   myParagraph.html("you clicked the button");
}
function changeImagePosition() {
   var newX = random(width); 
   var newY = random(height); 
   myImage.position(newX, newY);
}
function updateTextSize() {
   var newSize = textSizeSlider.value();
   myParagraph.style("font-size", newSize + "px");
}
function hideText() {
   myParagraph.style("visibility", "hidden");
 }
function draw() {
  myParagraph.position(mouseX, mouseY);
  
}

function makeRed() {
  myParagraph.style("color", "red");
}


/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
It's called the modulus, it gives you the remainder of the frame count divided by 200, which makes it loop.
1. Where, in the p5 reference, do we find all this DOM stuff?
It is under the HTML elements.
2. Why is the text so large when it's just a "paragraph"?
It is big because of the code 'new size', which makes it so the size of the font is determined by where the slider is.
3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?
   Color and red came from CSS, where the font also came from, which means style.css is used for style changes.

Some Things to Try:
0. Make the text follow the mouse pointer
1. Make a button
2. Make the button affect the style or position of some text
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/