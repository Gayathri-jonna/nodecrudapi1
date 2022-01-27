// Importing expressjs for creating the server and creating api routes
const express = require('express')

// Body parser for getting the data through the url
const bodyParser = require('body-parser')

// Const
const { request } = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.post('/quotes',(req,res) =>{
    res.send(req.body)
})

app.get('/',(req,res) => {

     res.sendFile(__dirname + './index.html')

})


const PORT = 5000

app.listen(PORT,() => {
    console.log(`server running at port ${PORT}`)
})