# github-api-app
Through npm (Node) and bower install the different packages 

# Remember to get your own API key:
Use the GitHub API to retrieve this information. This API allows 5,000 requests per hour with an API key, but only 60 requests per hour _without_ one. Everyone is therefore required to use their own unique key. GitHub refers to these keys as "Personal Access Tokens".

Creating Personal Access Tokens
---

+ Visit the _Settings_ area of your GitHub account 
+ select Personal Access Tokens from the sidebar, and hit Generate New Token
+ GitHub will offer a list of options Do not select any. These grant read/write permissions and access to personal data. Finally, select Generate Token. 

Setup Instructions
---

+ Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable exports.apiKey in .env)
+ Include .env in .gitignore.
+ Use at least two JavaScript files: One to receive form input, another to make an API request and display results.
+ Since we must use access tokens to bypass the rate limit, starter code is provided. Below is a function to make an authenticated API call: 
```javascript
exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
```

+ This example assumes your API Key is stored in an apiKey variable, as described in the "Security" section at the bottom of this lesson.
+ It uses the URL https://api.github.com/users/daneden, requesting details about the user "daneden". Try other usernames and check out the response in the console.
+ Notice the ?access_token= used with the API key after the username. You must include your personal access token with your request.
+ Consult the GitHub API Documentation for further information.

