class Github {
    constructor() {
        this.client_id = '4bcb51e34b984ada62a5';
        this.client_secret = '34272f6284abed8fc9ab10e7994a910582bbfa4c';
        this.repos_count = 10;
        // to be use to format our response
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}