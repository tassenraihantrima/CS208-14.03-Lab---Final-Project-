var express = require('express');
var router = express.Router();

let comments = [
  {
    name: 'Sam',
    message: 'Best maple bar in downtown Boise!',
    date: '11/30/2025'
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Downtown Donuts' });
});

/* GET menu page. */
router.get('/menu', function (req, res, next) {
  res.render('menu', { title: 'Menu - Downtown Donuts' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Us - Downtown Donuts' });
});

/* GET comments page. */
router.get('/comments', function (req, res, next) {
  res.render('comments', {
    title: 'Comments - Downtown Donuts',
    comments
  });
});

/* POST new comment. */
router.post('/comments', function (req, res, next) {
  const { name, message } = req.body;

  if (name && message) {
    comments.unshift({
      name,
      message,
      date: new Date().toLocaleDateString()
    });
  }

  res.redirect('/comments');
});

module.exports = router;
