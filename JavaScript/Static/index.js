const AXIOS = require("axios");
const CHEERIO = require("cheerio");

const URL = "https://news.ycombinator.com";

let getData = html => {
    data = [];
    const $ = CHEERIO.load(html);
    $("table.itemlist tr td:nth-child(3)").each((i, elem) => {
        data.push({
            title: $(elem).text(),
            link: $(elem).find("a.storylink").attr("href")
        })
    })
    console.log(data)
}
AXIOS.get(URL).then(response => {
    getData(response.data)
}).catch(error => {
    console.log(error);
})