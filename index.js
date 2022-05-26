const exp = require('constants');
const express = require('express');
const express = require('express-session');

const port = 3000;
var path = require('path');
const app = express('path');

app.use(session({secret: 'jssdp'}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.user('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.post('/', (req, res) =>{
    res.render('index');
})

app.get('/', (req,res) =>{
    res.render('index');
}) 
app.listen(port,() =>{
    console.log('Servidor rodando');
})