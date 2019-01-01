class GitHub {
    constructor() {
        this.client_id = '4bcb51e34b984ada62a5';
        this.client_secret = '34272f6284abed8fc9ab10e7994a910582bbfa4c';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // json data
        const profileData = await profileResponse.json();

        return {
            profile
        }
    }
}