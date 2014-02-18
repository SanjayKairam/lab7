var models = require('../models');

exports.projectInfo = function(req, res) { 
	var projectID = req.params.id;

  /* Add a query here to find the project
     with _id matching "projectID". Look
     out for the underscore!
     Your code goes below here.
  */

  function respondWithProject(err, project) {
    console.log(project[0]);
    res.json(project[0]);
  }
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  console.log('deleting '+projectID);

  /* Find a Project using the projectID given.
     Remove it, and execute the onceRemoved
     function as a callback.
     Your code goes below here.
  */

  function onceRemoved(err) {
    if(err) console.log(err);
    res.send();
  }
}

exports.addProject = function(req, res) {
  var post_data = req.body;
  console.log(post_data);

  /* Create a new project using the data
     from post_data, and assign it to a 
     new variable called "new_proj".
     Your code goes below here.
  */

  new_proj.save(onceSaved);

  function onceSaved(err) {
    if(err) console.log(err);
    res.send();
  }
}

