import express from "express"

const app = express()
const port = process.env.PORT || 8000

app.set('view engine', 'pug')
app.use(express.static('src'))
app.get('/', (req, res) => {
    res.render('index', {title: 'Hello Word', message: 'Hello Three!'})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})