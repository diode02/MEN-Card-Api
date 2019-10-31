const express = require('express')
const path = require('path')

let app =  express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(request, response)=>{
     response.send('help.html');
})

app.get('/help',(request, response)=>{
    response.render('help.html');
})

app.listen(3001, ()=>{
    console.log('surver  is up on port 3001')
})
