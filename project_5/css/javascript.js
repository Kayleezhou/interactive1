var audio = audio/cat_1.mp3("audio")[0];
audio.play();

// or with an ID

var audio = catmeow("mySoundClip");
audio.play();
var audio = $("#mySoundClip")[0];
$("nav a").mouseenter(function() {
  audio.play();
});