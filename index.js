const express = require('express')
const app = express()
const path = require('path')

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.set('views', path.join(__dirname,'views'))


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000,(err) =>{
    if (err){
        console.log('Não foi possível iniciar o servidor')
    }else{
        console.log('Server is running')
    }
})