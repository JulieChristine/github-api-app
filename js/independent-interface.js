var Repos = require('./../js/independent.js').reposModule;

$(document).ready(function() {
  var currentReposObject = new Repos();
  $('#usernameInfo').click(function() {
    var name = $('#username').val();
    console.log('https://api.github.com/users/' + name + '?access_token=' + 'e091fd4525f3b769226bee742391ce79c084af36');
    $('#username').val("");

    currentReposObject.getRepos(name);

  });
});
