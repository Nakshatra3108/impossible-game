var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----
createCanvas(windowWidth,windowHeight)
var w1 = createSprite(windowWidth/2 , windowHeight/4 , 1052 , 5)
var w2 = createSprite(windowWidth/2 , windowHeight/1.3333333333333333 , 1052 , 5);
var w8 = createSprite(windowWidth/6.349206349206349, windowHeight/1.7241379310344827 , 262 , 5);
var w3 = createSprite(windowWidth/4.444444444444445 , (windowHeight/3.007518796992481)+1.6 , 5 , 168)
var w4 = createSprite(windowWidth/4.444444444444445, (windowHeight/1.4981273408239701)-1.6 ,5 , 168);
var w5 = createSprite(windowWidth/1.2903225806451613, (windowHeight/3.007518796992481)+1.6, 5 , 168);
var w6 = createSprite(windowWidth/1.2903225806451613, (windowHeight/1.4981273408239701)-1.6 , 5, 168);
var w7 = createSprite(windowWidth/6.349206349206349, (windowHeight/2.380952380952381) , 262 , 5);
var w9 = createSprite(windowWidth/11.11111111111111, windowHeight/2 , 5, 160)
var w10 = createSprite(windowWidth/1.1869436201780414, windowHeight/2.380952380952381 ,262 , 5);
var w11 = createSprite(windowWidth/1.1869436201780414, windowHeight/1.7241379310344827, 262 , 5);
var w12 = createSprite(windowWidth/1.098901098901099 , windowHeight/2 , 5 , 160)
var start = createSprite((windowWidth/5.797101449275362)-26, windowHeight/2 , 260 , 150);
start.shapeColor = "cyan"
var end = createSprite ((windowWidth/1.2084592145015105)+26, windowHeight/2 , 260 , 150);
end.shapeColor = "cyan"
var player = createSprite(windowWidth/5.797101449275362, windowHeight/2 , 40 , 40);
player.shapeColor = "green"
var b1 = createSprite(windowWidth/3.3333333333333335, windowHeight/2 , 35 , 35);
b1.shapeColor = "red"
var b2 = createSprite(windowWidth/2.3121387283236996, windowHeight/2 , 35 , 35);
b2.shapeColor = "red"
var b3 = createSprite(windowWidth/1.7699115044247788, windowHeight/2 , 35 , 35);
b3.shapeColor = "red"
var b4 = createSprite(windowWidth/1.4336917562724014, windowHeight/2 , 35 , 35);
b4.shapeColor = "red"

var death = 0;
b1.velocityY = 16
b2.velocityY = -16
b3.velocityY = 16
b4.velocityY = -16

function draw() {
 background("white")
 textSize(100)
text("Deaths:" + death , (windowWidth/2)-200 , 90)

 b1.bounceOff(w1);
b1.bounceOff(w2);
b2.bounceOff(w1);
b2.bounceOff(w2)  ;
  b3.bounceOff(w1);
b3.bounceOff(w2);
b4.bounceOff(w1);
b4.bounceOff(w2) ; 
  
  if (keyDown("right")){
    player.velocityX = 6
  }
   if (keyDown("left")){
    player.velocityX = -6
  }
if (player.isTouching(b1)
||player.isTouching(b2)
||player.isTouching(b3)
||player.isTouching(b4)
||player.isTouching(w9)){
  player.x= windowWidth/5.797101449275362
  player.y= windowHeight/2
  player.velocityX= 0
  death = death + 1
}
if (player.isTouching(end)){
  textSize(100)
  text("You Win!" , (windowWidth/2)-170 , windowHeight/2)
  b1.velocityY=0
  b2.velocityY=0
  b3.velocityY=0
  b4.velocityY=0
  player.velocityX=0
}
  createEdgeSprites()
  drawSprites()
   
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
