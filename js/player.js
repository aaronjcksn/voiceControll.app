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
