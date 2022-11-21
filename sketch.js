var face_size=[]
var place_x=[]
var place_y=[]
var music_btn=[]
var mouse_btn=[]
var song
var songIsplay=false
var amp
function preload(){
  song = loadSound("我們這一家 片尾曲.mp3");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  music_btn = createButton("停止")
music_btn.position(10,10)
music_btn.size(175, 50);
music_btn.style('background-color', 'black');
music_btn.style('font-size', '15px');
music_btn.style('color', 'white');
music_btn.mousePressed(music_btn_pressed)
mouse_btn = createButton("開始")
  mouse_btn.position(200,10)
  mouse_btn.size(175, 50);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '15px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)
  for (var i=0;i<5;i++){
    face_size[i] = random(0.1,4)
    place_x [i]= random(10,width/5)
    place_y [i]= random(10,height/5)
  }
}
function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  amp=new p5.Amplitude()  
  music_btn.style('background-color','#6c757d')
  mouse_btn.style('background-color','black')
  Speech_btn.style('background-color','black')

}
function mouse_btn_pressed(){
  song.pause()
  songIsplay = false
  music_btn.style('background-color','black')
  mouse_btn.style('background-color','#6c757d')
  Speech_btn.style('background-color','black')
}

function draw() {
  background(220);
 // textSize(50)
  //text("X:"+mouseX+" Y:"+mouseY,50,50)
  for(var j=0;j<5;j++)
  {
  push()
  translate(place_x[j],place_y[j])
  fill("#6c584c")
  strokeWeight(0)
  ellipse(-10/face_size[j]+face_size[j],-250/face_size[j]+face_size[j],80/face_size[j],80/face_size[j])//頭髮
  ellipse(55/face_size[j]+face_size[j],-250/face_size[j]+face_size[j],80/face_size[j],80/face_size[j])
  ellipse(105/face_size[j]+face_size[j],-220/face_size[j]+face_size[j],80/face_size[j])
  ellipse(135/face_size[j]+face_size[j],-175/face_size[j]+face_size[j],80/face_size[j],80/face_size[j])
  ellipse(160/face_size[j]+face_size[j],-125/face_size[j]+face_size[j],80/face_size[j],80/face_size[j])
  ellipse(170/face_size[j]+face_size[j],-65/face_size[j]+face_size[j],80/face_size[j],80/face_size[j])
  ellipse(170/face_size[j]+face_size[j],-10/face_size[j]+face_size[j],80/face_size[j],80/face_size[j])
  fill("#f9dcc4")
  ellipse(160/face_size[j]+face_size[j],face_size[j],50/face_size[j])//耳朵
  ellipse(face_size[j],face_size[j],300/face_size[j],500/face_size[j])//臉
  rect(-100/face_size[j]+face_size[j],250/face_size[j]+face_size[j],30/face_size[j],50/face_size[j])//foot
  rect(50/face_size[j]+face_size[j],250/face_size[j]+face_size[j],30/face_size[j],50/face_size[j])//foot
   rect(-180/face_size[j]+face_size[j],55/face_size[j]+face_size[j],30/face_size[j],100/face_size[j])//手臂
   rect(150/face_size[j]+face_size[j],55/face_size[j]+face_size[j],30/face_size[j],100/face_size[j])//手臂
   ellipse(-165/face_size[j]+face_size[j],165/face_size[j]+face_size[j],55/face_size[j])//右拳頭
   ellipse(165/face_size[j]+face_size[j],165/face_size[j]+face_size[j],55/face_size[j])//左拳頭
  fill("#ffffff")
  ellipse(-50/face_size[j]+face_size[j],-90/face_size[j]+face_size[j],30/face_size[j])//左眼
  ellipse(-25/face_size[j]+face_size[j],-90/face_size[j]+face_size[j],30/face_size[j])//右眼
  rect(-100/face_size[j]+face_size[j],285/face_size[j]+face_size[j],30/face_size[j],15/face_size[j])//
  rect(50/face_size[j]+face_size[j],285/face_size[j]+face_size[j],30/face_size[j],15/face_size[j])//
  ellipse(-90/face_size[j]+face_size[j],310/face_size[j]+face_size[j],50/face_size[j],30/face_size[j])//腳指頭
  ellipse(70/face_size[j]+face_size[j],310/face_size[j]+face_size[j],50/face_size[j],30/face_size[j])//腳指頭

  fill("#000000")
  ellipse(-50/face_size[j]+face_size[j]+mouseX/400,-90/face_size[j]+face_size[j]+mouseY/400,10/face_size[j])//黑珠
  ellipse(-25/face_size[j]+face_size[j]+mouseX/400,-90/face_size[j]+face_size[j]+mouseY/400,10/face_size[j])//右黑珠

  noFill()
  strokeWeight(1)
  if(mouseIsPressed) {
  arc(-23/face_size[j]+face_size[j],-120/face_size[j]+face_size[j],25/face_size[j],40/face_size[j],200,350)//眉毛（x,y,寬,高,胡到點）
  }
  else{
    arc(-23/face_size[j]+face_size[j],-120/face_size[j]+face_size[j],25/face_size[j],30/face_size[j],200,350)//眉毛（x,y,寬,高,胡到點）
  }
  fill("#f28482")
  strokeWeight(0)
  ellipse(face_size[j],face_size[j],310/face_size[j],40/face_size[j])//嘴巴
  fill(0)
  rect(-130/face_size[j]+face_size[j],0/face_size[j]+face_size[j],80/face_size[j],1.5/face_size[j])//嘴線
  rect(-18/face_size[j]+face_size[j],0/face_size[j]+face_size[j],100/face_size[j],1.5/face_size[j])
noFill()
strokeWeight(2)
  arc(-33/face_size[j]+face_size[j],face_size[j],30/face_size[j],30/face_size[j],0,180)//純珠
  strokeWeight(0)
  fill("#ff7b00")
  if(!songIsplay){
  triangle(-150/face_size[j]+face_size[j],30/face_size[j]+face_size[j],-150/face_size[j]+face_size[j],90/face_size[j]+face_size[j],-200/face_size[j]+face_size[j],70/face_size[j]+face_size[j])//右袖子
}
else{
  vol = amp.getLevel()
  triangle(-150/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*30/face_size[j]+face_size[j],-150/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*90/face_size[j]+face_size[j],-200/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*70/face_size[j]+face_size[j])//右袖子
}
  fill("#ff9500")
  if(!songIsplay){
  ellipse(-140/face_size[j]+face_size[j],65/face_size[j]+face_size[j],60/face_size[j]+face_size[j],50/face_size[j]+face_size[j])//胸
}
else{
  vol = amp.getLevel()
  ellipse(-140/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*65/face_size[j]+face_size[j],60/face_size[j]+face_size[j],50/face_size[j]+face_size[j])//胸
}

  rect(-150/face_size[j]+face_size[j],30/face_size[j]+face_size[j],300/face_size[j],100/face_size[j])//身體
  fill("#ff7b00")
  if(!songIsplay){
  triangle(150/face_size[j]+face_size[j],30/face_size[j]+face_size[j],150/face_size[j]+face_size[j],90/face_size[j]+face_size[j],200/face_size[j]+face_size[j],70/face_size[j]+face_size[j])//左袖子\
  }
  else{
    vol = amp.getLevel()
    triangle(150/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*30/face_size[j]+face_size[j],150/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*90/face_size[j]+face_size[j],200/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*70/face_size[j]+face_size[j])//左袖子\
  
  }

  noFill()
  strokeWeight(1)
  if(!songIsplay){
  arc(80/face_size[j]+face_size[j],65/face_size[j]+face_size[j],60/face_size[j],50/face_size[j],280,90)//胸線
}
else{
  vol = amp.getLevel()
  arc(80/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*65/face_size[j]+face_size[j],60/face_size[j],50/face_size[j],280,90)//胸線

}
  strokeWeight(0)
  fill("#0096c7")
  rect(-150/face_size[j]+face_size[j],125/face_size[j]+face_size[j],300/face_size[j],150/face_size[j])//下身

  fill(255)
  rect(-153/face_size[j]+face_size[j],100/face_size[j]+face_size[j],275/face_size[j],150/face_size[j])//圍裙
  
  }
}

  function mousePressed()
  {
    if(!songIsplay){//按一下音樂開始或是暫停
      song.play()
      songIsplay = true
      amp=new p5.Amplitude()
  
    }
    else{
      song.pause()
      songIsplay = false
    }
  
  }


