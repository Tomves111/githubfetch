class Github {
    constructor(){
        this.client_id = 'e393be2955eb02205036';
        this.client_secret = '28a8ef9fcd155d126424bae184e1b16d0423486b';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/
        ${user}?client_id=${this.client_id}&client_secret=
        ${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/
        ${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=
        ${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}