const express = require('express')
const app = express()   
const port = 3000

app.use(express.json())

app.get('/', (req, resp) => resp.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var books = [
    {
        id : 1,
        title : 'The Holy-C programming language',
        author : 'Terry Davis',
        year : '1978'
    },
    {
        id: 2,
        title : 'The Dirty Coder: A code of misconduct for professional coders',
        author : 'Rober Cecil',
        year : '2011'
    },
    {
        id: 3,
        title : 'Learn python the hard way',
        author : 'Zed Shaw',
        year : '2013'
    }
]

app.get('/books', (req, resp)=>{
    resp.json(books)
})

app.get('/books/:id', (req, resp)=>{
    let id = req.params.id
    let book = books.find(v => v.id === parseInt(id))

    if(book === undefined){
        resp.status(404).send('libro no encontrado')
    }

    resp.send(book)

})

app.post('/books', (req, resp)=>{
    let
})