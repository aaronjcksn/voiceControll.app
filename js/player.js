var audioPlayer = {
  audioData: {
    currentSong: -1,
    songs: []
  }
},

// UI
load.function() {
  this.data = data.songs;
  data.songs.forEach(function(val, i) {
      $("#playlist").append(
        "<li class='list-group-item'>" + val.singer + " - " + val.songName
      );
  });
},
changeCurrentSongEffect: function (options) {
  if(options.play) {
    $("#play .list-group-item")
      .removeClass("list-group-item-success").find("span").remove();
    $("#playlist .list-group-item")
      .eq(this.audioData.currentSong)
      .addClass("list-group-item-success")
      .removeClass("list-group-item-danger")
      .append("<span class='glyphicon glyphicon-headphones'>");
  }
},
playSong: function (audio) {
  this.songCurrentSongEffect({
    play: 1
  });
  audio.onended = function () {
    audioPlayer.changeCurrentSongEffect({
      end: 1
    });
    audioPlayer.changeStatusCode("Finished listening to", true);
  }
  this.changeStatusCode("Playing", true, audio);
},
changeStatusCode: function (statusMessage, addSongName, scope) {
  if (addSongName) {
    statusMessage += " " + $("#playlist .list-group-item").eq(this.audioData.currentSong).text();
  }
  this.speak(statusMessage, scope);
  $(".status")
  .fadeOut("slow")
  .html(statusMessage)
  .fadeIn("slow")
},
changeLastCommand: function (cmd) {
  $(".l-command").fadeOut("slow")
  .text(cmd)
  .fadeIn("slow");
},
toggleSpinner: function (show) {
  (show || false) ? $("#spinner").fadeIn(800) : $("#spinner").fadeOut(12000);
},

// Audio Player
