//this is a rhythm based game
//the halo oustside of the circle will shrink over time, move the cursor on the circle when the halo touches the white border of the circle.
//this game is based from the game OSU!
//music played in the game is created by BGH Music. https://www.youtube.com/channel/UC8ZcDHb1WKZnzmDCUoT8IVA
//background image is from https://1freewallpapers.com/vocaloid-hatsune-miku-piano/ko
//cursor image is created by minamoto-kun.https://osu.ppy.sh/users/6845580

let notes=[];

let note_size=0;
let note_speed_scale=0;
let timer_value=0;
let map_count=0;
let note_x=0;
let note_y=0;


let song_is_playing=false;

let song;
let bad_hit_sound;
let good_hit_sound;
let background_img;

function preload(){
  //preload songs and image
  good_hit_sound = loadSound('assets/good_hit.wav');
  bad_hit_sound = loadSound('assets/bad_hit.mp3');
  song = loadSound('assets/song.mp3');
  background_img = loadImage('assets/background.jpg');
}

function setup() {
  //setup canvas
  createCanvas(500, 500); 

  //setup note size
  note_size=width/15;
  
  //setup how fast note disappear
  note_speed_scale=0.8;
  
  //timer
  setInterval(timer,20);
  
  //resize image
  background_img.resize(width,height);
  
}

function draw() {
  //display background image
  image(background_img,0,0);
  
  //change cursor
  cursor('assets/cursor.png',5,5);
  
  //display notes
  for (var i = 0; i < notes.length; i++) {
    notes[i].display();
  }
  
  //read map and generate notes
  game_map();
  
}

//function for create note
function create_note(note_x,note_y,colour) {
  this.x=note_x;
  this.y=note_y;
  
  let a = new note(x, y,colour,timer_value);
  notes.push(a);
}

//timer value increase by 1 every 10ms
function timer(){
  timer_value++;
}

//generate note in random position at time coded in the map array
//also control song play
function game_map(){
  if(!song_is_playing){
    song.play();
    song_is_playing=true;
  }
  //map contains all timing to generate note
  let map=[50,62,74,131,143,155,167,237,260,308,319,331,343,354,366,378,390,401,425,436,507,
519,530,542,554,565,577,589,612,624,636,659,683,694,706,718,729,741,753,765,776,788,
800,812,823,835,847,858,870,882,894,905,917,929,940,952,964,976,987,999,1011,1034,1058,
1069,1075,1081,1093,1104,1128,1151,1163,1169,1175,1187,1198,1222,1245,1257,1263,1269,
1280,1292,1304,1315,1327,1339,1351,1386,1409,1433,1444,1456,1468,1479,1491,1503,1515,
1526,1538,1550,1562,1573,1585,1597,1608,1620,1632,1644,1655,1667,1679,1690,1702,1714,
1726,1737,1749,1761,1772,1784,1796,1808,1819,1831,1843,1854,1866,1878,1890,1901,1913,
1925,1937,1948,1960,1972,1983,1995,2007,2019,2030,2042,2054,2065,2077,2089,2101,2112,
2124,2136,2147,2171,2183,2194];
  
  //read map and generate notes accordinglly
  //latency is added for note_speed_scale
  if(map[map_count]==timer_value-round(50*(1-note_speed_scale),0)){
    let colour = color(random(255), random(255), 255);
    colour.setAlpha(150);
    
    note_x=random(note_size*2,width-(note_size*2));
    note_y=random(note_size*2,height-(note_size*2));
    
    create_note(note_x,note_y,colour);
    map_count++;
  }
  
  //if map end, reset all values to restart the game
  if(timer_value==2300){
    notes=[];
    timer_value=0;
    map_count=0;
    song.stop();
    song_is_playing=false;
  }
}

//setup notes
function note(note_x, note_y,colour,note_time) {
  this.x = note_x;
  this.y = note_y;
  this.r = note_size;
  this.display_check=true;
  this.color = colour;
  this.time=note_time;

  //if check is true, display note
  this.display = function () {
    if(this.display_check){
      //draw note, note disapper after 1100ms*note speed scale
      if(timer_value-this.time<55*note_speed_scale){
        stroke(255);
        strokeWeight(height/180);
        fill(this.color);
        circle(this.x, this.y, this.r*2);
      }
      //draw halo, halo shrink over time and finally disappear after 1000ms*note speed scale
      stroke(255);
      strokeWeight(height/180);
      fill_color = color(0);
      fill_color.setAlpha(0);
      fill(fill_color);
      if(timer_value-this.time<50*note_speed_scale){
        circle(this.x,this.y,-((((this.time-timer_value)*4)/(100*note_speed_scale))+4)*this.r);
      }
    }
    //if the mouse is within this note and this.time is between 900ms*note speed scale and 1100ms*note speed scale, play good hit sound, then remove note
    if((timer_value-this.time<55*note_speed_scale&&timer_value-this.time>45*note_speed_scale)&&dist(this.x, this.y, mouseX, mouseY) < this.r&&this.display_check==true){
      good_hit_sound.play();
      this.display_check=false;
    }
    //after 1100ms, remove note and play bad hit sound
    if(timer_value-this.time>55*note_speed_scale&&this.display_check==true){
      bad_hit_sound.play();
      this.display_check=false;   
    }
    
  }
  
}

