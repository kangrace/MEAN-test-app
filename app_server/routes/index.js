var express = require('express');
var router = express.Router();
var controlMain = require('../controllers/main')    // require main controllers file

// separating the controller logic from the route definitions
// this code is not in /controllers/main/index
// var homepageController = function(req, res) {
//   res.render('index', { title: 'Express' });
// };

/* GET home page. */
router.get('/', controlMain.index);

module.exports = router;
