// Init Github
const github = new GitHub;


// Search User
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    // is not equal
    if (userText.value !== '') {
        // console.log(userText);

        // Make http call
        github.getUser(userText)
            .then(data => {
                // !some stuff here are not created yet
                if (data.profile.message === 'Not Found') {
                    // Show Alert

                } else {
                    // Show profile
                }

            })
    } else {
        // Clear the profile
    }
});