var apiKey = require('./../.env').apiKey;

Repos = function(){
};

Repos.prototype.getRepos = function (name){
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.showRepos').text("The following user " + response.name + " has " + response.public_repos + " repositories made public.");
    $('.showFollowers').text("Number of followers:" + response.followers);
    $('.showLocation').text("This github user is located in: " + response.location);
  }).fail(function(error) {
    $('.showRepos').text(error.responseJSON.message);
  });
};


exports.reposModule = Repos;
