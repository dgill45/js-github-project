


/*create function to not load js content until html has loaded*/
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

  /*gets user object from api*/
function fetchGitHubByValue(value){

    fetch(`https://api.github.com/search/users?q=${value}`,{
        headers:{
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(res => res.json()
    )
    .then(json => json.items.forEach((user) => {
        const userLi= createLi(user)
        
    }));


function addClick(){
    const input = document.getElementById('search')
    const submitBtn = document.getElementById('submit-button')
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault()
        fetchGitHubByValue(input.value)
        
    })
}
   
  function userLi(user) {
    let username = users.items.login;
    let avatar = users.items.avatar_url;
    let link = users.items.url;

    return(username, avatar, link);
}


function createLi(user){
    const li = document.createElement('li')
    li.appendChild()
}
    

}
