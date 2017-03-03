$(document).ready(function() {
  let playlistID = localStorage.getItem('playlistID');
  let userID = localStorage.getItem('userID');
  let finalPlaylist = localStorage.getItem('finalPlaylist...');

  let webPlayerHolder = $('#webPlayerHolder');

  webPlayerHolder.append(`<iframe id="webPlayer" src="https://embed.spotify.com/?uri=spotify:user:${userID}:playlist:${playlistID}&theme=white" frameborder="0" allowtransparency="true"></iframe><br><a href="custom.html" class="btn btn-default btn-lg hvr-radial-out">Make a custom playlist</a>`);
});
