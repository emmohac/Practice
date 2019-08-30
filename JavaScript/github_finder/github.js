const url = "https://api.github.com/users"
class Github {
    constructor() {
        this.client_id = "104e56511787d8311b91"
        this.client_secret = "b2bcd453b0d99d48ea3f530f56b296f18375996f"
        this.numOfRepo = 5
        this.repoSorted = "created=asc"
    }

    async getUser(user) {
        let profile = await fetch(`${url}/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        let repos = await fetch(`${url}/${user}/repos?per_page=${this.numOfRepo}&sort=${this.repoSorted}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        let profileResponse = await profile.json()
        let repo = await repos.json()
        return {
            profile: profileResponse,
            repo
        }
    }
}