var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




function Submission(githubName, githubURL, githubImage) {
  this.githubName = githubName;
  this.githubURL = githubURL;
  this.githubImage = githubImage;
}


module.exports = router;
