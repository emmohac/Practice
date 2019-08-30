class UI {
    constructor() {
        this.profile = $("#profile")
    }

    showProfile(user) {
        this.profile.append(`
        <div class='card card-body mb-3'>
        <div class='row'>
        <div class='col-md-3'>
        <img class='img-fluid mb-2' src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class='btn btn-primary btn-block my-3'>View Profile</a>
        </div> 
        <div class='col-md-9'>
        <span class='badge badge-primary'>Public repos: ${user.public_repos}</span>
        <span class='badge badge-secondary'>Public gists: ${user.public_gists}</span>
        <span class='badge badge-success'>Follower: ${user.followers}</span>
        <ul class='list-group mt-2'>
        <li class='list-group-item'>Copmany: ${user.company}</li>
        <li class='list-group-item'>Blog: ${user.blog}</li>
        <li class='list-group-item'>Location: ${user.location}</li>
        </ul>
        </div> 
        </div>
        </div>
        <h3 class='page-heading mb-3'>Latest repos</h3>
        <div id='repos'></div>
        `)
    }

    showRepo(repos) {
        let output = ''
        repos.forEach(repo => {
            output += `<div class='card card-body'>
            <div class='row'>
            <div class='col-md-6'>
            <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
            </div>

            <div class='col-md-6'>
            <span class='badge badge-primary'>Fork: ${repo.forks}</span>
            <span class='badge badge-secondary'>Stars: ${repo.stargazer_count}</span>
            </div>
            </div>
            </div>`
        })

        $("#repos").empty()
        $("#repos").append(output)
    }
}