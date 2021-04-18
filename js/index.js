/*let users = [];

*/
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });


function fetchGitHubByValue(value){

    fetch(`https://api.github.com/search/users?q=${value}`,{
        headers:{
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(res => res.json())
    .then(json => console.log(json))
    
}

    const input = document.getElementById('search')
    const submitBtn = document.getElementById('submit-button')
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        fetchGitHubByValue(input.value)
    })
    
   /* function(users){
       .then(json => console.log(json))
    let username = users.items.login;
    let avatar = users.items.avatar_url;
    let link = users.items.url;

    console.log(username, avatar, link);
})    */



    
    


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

