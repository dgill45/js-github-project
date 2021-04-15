/*let users = [];

*/document.addEventListener("DOMContentLoaded", function (){


});

const input = document.getElementById('search');
const submit = document.getElementById('submit-button');
submit.addEventListener('click', function(event){
    event.preventDefault
    fetchGitHubByValue(input.value)
})

function fetchGitHubByValue(value){

fetch(`https://api.github.com/search/users?q=${value}`,{
    header:{
        Accept: 'application/vnd.github.v3+json'
    }
})
 .then(function(response){
  return response.json();
})
.then(json => console.log(json))
    
    
   /* function(users){
    let username = users.items.login;
    let avatar = users.items.avatar_url;
    let link = users.items.url;

    console.log(username, avatar, link);
})    */
}




/*   {
  // Use this data inside of `json` to do DOM manipulation
}

}

function listUser(){
users = Object.keys()
{
var input = document.getElementById("userInput");
alert(input);
}

*/