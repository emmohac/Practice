const Nightmare = require("nightmare")
const cheerio = require("cheerio")
const nightmare = Nightmare({
    show: true
})
const fs = require("fs")

const item = process.argv.slice(2)
nightmare
    .goto("https://orangecounty.craigslist.org")
    .type("input.querybox.flatinput.ui-autocomplete-input", item[0])
    .wait(500)
    .type("input.querybox.flatinput.ui-autocomplete-input", "\u000d")
    .wait("div.content")
    .evaluate(() => document.querySelector("body").innerHTML)
    .end()
    .then(response => {
        let data = JSON.stringify(getData(response))
        fs.writeFile("./data.json", data, "utf8", function (err) {
            if (err) {
                return console.log(err)
            }
        })
        console.log("Data file saved")
    })
    .catch(error => {
        console.error("Search failed", error)
    })

let getData = html => {
    data = []
    const $ = cheerio.load(html)
    $("ul.rows").each((row, raw_element) => {
        $(raw_element).find("p").each((i, elem) => {
            let title = $(elem).find("a.result-title.hdrlnk").text()
            let price = $(elem).find("span.result-meta span.result-price").text()
            if (title) {
                data.push({
                    title: title,
                    price: price
                })
            } else {
                data.push({
                    title: "nothing",
                    price: 0
                })
            }
        })
    })
    return data
}