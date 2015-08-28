var express = require('express');
var router = express.Router();
var utilities = require('./utilities.js');

var submissionArray = [];


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Github Contest' });
});

router.post('/submit', function(req, res, next) {

var subName = req.body.personName;
var subImage = req.body.personImage || 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png';
var subURL = req.body.personUrl;

  submissionArray.push({
    name: subName,
    image: subImage,
    url: subURL
  });

console.log(submissionArray);

  res.render('submission', {
    title: 'All Submissions',
    message: 'Your submission was successful!',
    submissions: submissionArray
  });
});


router.post('/', function(req, res, next) {
  res.redirect('/');
});



module.exports = router;
