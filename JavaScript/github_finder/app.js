const ui = new UI
$("#searchUser").keyup((e) => {
    e.preventDefault()

    const input = $("#searchUser").val()
    if (input !== "") {
        const github = new Github
        github.getUser(input).then(data => {
            if (data.profile.message === "Not Found") {
                $(".alert").remove()
                $(`<div class='alert alert-danger'>User not found</div>`).insertBefore($(".searchContainer"))

            } else {
                $(".alert").remove()
                $("#profile").empty()
                console.log(data)
                ui.showProfile(data.profile)
                ui.showRepo(data.repo)
            }
        }).catch(err => console.log(err))
    } else {

    }
});