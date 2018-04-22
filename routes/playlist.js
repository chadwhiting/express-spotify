var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json({
    playlist: [
      { "songTitle": "A very good song",
        "artist": "Artist formerly known as Prince",
        "album": "Magickal album",
        "time": "3:40"},
      { "songTitle": "Something Else",
        "artist": "Bob Fred",
        "album": "Dark album",
        "time": "2:20"},
      { "songTitle": "A very ok song",
        "artist": "Coolio",
        "album": "Some cool album",
        "time": "3:12"}
    ]
  });
});

module.exports = router;
