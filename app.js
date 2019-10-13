const axios = require('axios')
const $ = require('cheerio')

function dataToJSON(data) {
    return new Promise((resolve, reject) => {
        let leaderboard = []
        let projects = $('.AwncA', data)

        for (let i = 0; i < projects.length; i++) {
            let project = {
                title: $('.card-anchor', projects[i]).text(),
                description: $('p', projects[i]).first().text(),
                backers: ($('.IucsM', projects[i]).text()).trim(),
                avatar: ($('img', projects[i]).attr('src')).includes('https:') ? $('img', projects[i]).attr('src') : 'https://taikai.network' + $('img', projects[i]).attr('src'),
                url: 'https://taikai.network' + $('.card-anchor', projects[i]).attr('href'),
                devs: [],
                funding: $('.kai', projects[i]).text(),
                funding_int: parseInt(($('.kai', projects[i]).text()).replace('.', ''))
            }

            let article_html = $(projects[i]).html()
            let devs = article_html.match(/(?<=aria-label=").*?(?=" )/gm)

            for (let j = 0; j < devs.length; j++) {
                project.devs.push({
                    dev: devs[j],
                    url: 'https://taikai.network/' + devs[j]
                })
            }
            leaderboard.push(project)
        }
        resolve(leaderboard)
    })
}

function getEvent(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(event => {
            dataToJSON(event.data).then(result => {
                result.sort((a, b) => (a.funding_int > b.funding_int) ? -1 : (a.funding_int === b.funding_int) ? ((a.title > b.title) ? 1 : -1) : 1)
                resolve({
                    projects: result,
                    kai_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0, 0, 64, 64"><path d="M51.092.386a4.092 4.092 0 0 1 1.742-.387c1.205 0 2.289.52 3.04 1.348.032.027.067.06.105.098 1.178 1.505 1.309 3.108.393 4.809a4.295 4.295 0 0 1-.42.509 4.055 4.055 0 0 1-.574.553L29.383 30.79l8.609 8.545 6.882-6.196c.826-.744 1.817-1.086 2.972-1.026 1.155.061 2.105.504 2.849 1.331.745.827 1.076 1.805.993 2.936-.082 1.131-.537 2.068-1.363 2.812l-6.542 5.89 11.804 11.715c.065.066.098.131.098.196.065 0 .098.033.098.099l.098.098c.72.785 1.064 1.717 1.031 2.797-.033 1.079-.442 2.012-1.227 2.797-.72.72-1.57 1.112-2.552 1.178-.981.065-1.864-.164-2.65-.687l-.172-.16c-.308-.216-.171-.104-.416-.331L37.661 50.595l-6.883 6.197c-.826.745-1.806 1.099-2.939 1.062-1.134-.036-2.072-.468-2.816-1.294-.745-.827-1.087-1.817-1.026-2.972.06-1.155.504-2.105 1.331-2.849l6.554-5.902-8.584-8.551-8.342 7.556V59.84c0 1.112-.409 2.077-1.227 2.895-.818.818-1.783 1.227-2.895 1.227-1.113 0-2.078-.409-2.896-1.227-.817-.818-1.226-1.783-1.226-2.895V4.095c0-1.113.409-2.078 1.226-2.896.818-.817 1.783-1.226 2.896-1.226 1.112 0 2.077.409 2.895 1.226.818.818 1.227 1.783 1.227 2.896v28.658L49.993 1.052c.354-.278.72-.5 1.099-.666z" id="Combined-Shape"></path></svg>'
                })
            })
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


module.exports = { getEvent }