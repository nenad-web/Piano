var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");
var fifth = document.querySelector(".fifth");
var sixth = document.querySelector(".sixth");
var seventh = document.querySelector(".seventh");
var eight = document.querySelector(".eight");


first.addEventListener("click", function(event){
    var sound = new Howl({
      src: ['pianosounds/streched/DO.wav']
    });
    sound.play();
});

second.addEventListener("click", function(event){
    var sound = new Howl({
        src: ['pianosounds/streched/RE.wav']
      });
      sound.play();

});

third.addEventListener("click", function(event){
  var sound = new Howl({
      src: ['pianosounds/streched/MI.wav']
    });
    sound.play();

});

fourth.addEventListener("click", function(event){
  var sound = new Howl({
      src: ['pianosounds/streched/FA.wav']
    });
    sound.play();

});

fifth.addEventListener("click", function(event){
  var sound = new Howl({
      src: ['pianosounds/streched/SOL.wav']
    });
    sound.play();

});

sixth.addEventListener("click", function(event){
  var sound = new Howl({
      src: ['pianosounds/streched/LA.wav']
    });
    sound.play();

});

seventh.addEventListener("click", function(event){
  var sound = new Howl({
      src: ['pianosounds/streched/SI.wav']
    });
    sound.play();

});

eight.addEventListener("click", function(event){
  var sound = new Howl({
      src: ['pianosounds/streched/DO(octave).wav']
    });
    sound.play();

});