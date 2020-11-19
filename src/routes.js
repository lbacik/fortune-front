
module.exports = (app, fortune) => {

    app.get('/', (req, res) => {
        fortune.get()
            .then(fortune => {
                res.render('fortune', {
                    fortune: fortune
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/\n/g, '<br/>')
                })
                res.end()
            })
    })

    app.get('/about', (req, res) => {
        res.render('about')
        res.end()
    })
}
