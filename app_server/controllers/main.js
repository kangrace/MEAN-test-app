/* PAGE 69: In this file we’ll create an export
method called index and use it to house the res.render code as shown in the following
listing. */

/* GET home page */
module.exports.index = function(req, res){      // create an index export method
    res.render('index', { title: 'Express' });  // include controller code for homepage
};

