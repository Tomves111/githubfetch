 
//init github
const github = new Github;
//init ui
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search input event listeners
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not found'){
    //show allert
ui.showAlert('User not found', 'alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
//clear profile
        ui.clearProfile();
    }
    
})