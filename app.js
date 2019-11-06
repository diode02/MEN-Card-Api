let Express = require('express')

let app = Express();

let cars = [{
    name: 'Mehran',
    color: 'red',
    price: 30,
    make: 2011,
    location: 'Lahore'
},{
    name: 'Suzuki',
    color: 're',
    price: 10,
    make: 2014,
    location: 'Lare'
},{
    name: 'Cultus',
    color: 'redd',
    price: 20,
    make: 2011,
    location: 'Lahore'
}]

app.get('/',(req, res)=>{
    res.send(cars)
})

app.get('/car/:color',(req, res)=>{
    cars.find((c)=>{
        if(c.color == req.params.color)
            res.send(c);
    })
    return;
})


app.get('/car/:make/:min/:max',(req, res)=>{
    cars.find((c)=>{
        if(c.make == req.params.make)
            if(c.price>=req.params.min && c.price <= req.params.max){
                res.send(c);
                return;
            }      
    })
    res.send('not found')
})

app.post('/car/',(req, res)=>{
    q = req.query

    car = {
        name : q.name,
        color : q.color,
        price : q.price,
        make : q.make,
        location : q.location
    }
    cars.push(car);
    res.send("added")
})

app.post('/per',(req,res)=>{
    cars.forEach((c)=>{
        c.price = c.price*1.1;
    })
    res.send('done')
})

app.delete('/:year',(req, res)=>{
    cars.filter((c)=>c.make == req.params.year).forEach((c)=>cars.splice(cars.indexOf(c),1))
})


app.listen(3000,(req, res)=>{
    console.log('server is up on port 3000')
});