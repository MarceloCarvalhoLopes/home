const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000;

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.set('views', path.join(__dirname,'views'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/curriculum', (req,res) => {
    res.render('curriculum',{
    })
})

app.get('/home', (req,res) => {
    res.render('home', {
    })
})

app.get('/contato', (req, res) => {
    res.render('contato', {
    })
})


app.listen(port,(err) =>{
    if (err){
        console.log('Não foi possível iniciar o servidor')
    }else{
        console.log('Server is running')
    }
})