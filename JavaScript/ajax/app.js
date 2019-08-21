$("#get-joke").on("click", (e) => {
    e.preventDefault()
    const numberOfJoke = $("#num").val()
    let url = "http://api.icndb.com/jokes/random/"

    if (numberOfJoke !== '')
        url += numberOfJoke
    else
        url += "1"
    let xhr = new XMLHttpRequest()

    xhr.open("GET", url, true)
    xhr.onload = function () {
        if (this.status == 200) {
            let jokes = JSON.parse(this.responseText)
            let element = ''
            jokes.value.forEach(theJoke => {
                element += `<ul><li>${theJoke.joke}</li></ul>`
            })
            $("#num").val("")
            $(".output-joke").empty()
            $(".output-joke").append(element)
        }
    }

    xhr.send()
})