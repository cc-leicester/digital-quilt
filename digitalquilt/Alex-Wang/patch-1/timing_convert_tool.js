function setup() {
  createCanvas(400, 400);
  convert();
}

function draw() {
  background(220);
}

function convert(){
  let note_time=[17099,18505,18974,19911,20145,20381,20614,20848,21082,21318,21551,21786,22255,
                22489,23895,24130,24364,24598,24832,25067,25301,25536,26005,26239,26473,26942,
                27411,27645,27880,28114,28348,28582,28817,29051,29286,29520,29755,29989,30223,
                30457,30692,30926,31161,31395,31630,31864,32098,32332,32567,32801,33036,33270,
                33505,33739,33973,34442,34911,35145,35263,35380,35614,35848,36312,36786,37020,
                37138,37255,37489,37723,38192,38661,38895,39013,39130,39364,39598,39832,40067,
                40301,40536,40770,41473,41942,42411,42645,42880,43114,43348,43582,43817,44051,
                44286,44520,44755,44989,45223,45457,45692,45926,46161,46395,46630,46864,47098,
                47332,47567,47801,48036,48270,48505,48739,48973,49207,49442,49676,49911,50145,
                50380,50614,50848,51082,51317,51551,51786,52020,52255,52489,52723,52957,53192,
                53426,53661,53895,54130,54364,54598,54832,55067,55301,55536,55770,56006,56239,
                56473,56707,57176,57411,57645];
  var number=167;
  
for (var i = 1; i < note_time.length; i++) {
    number=((note_time[i]-note_time[i-1])/20)+number
    print(round(number));
  }
}