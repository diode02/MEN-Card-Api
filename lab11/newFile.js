let express = require('express');

let exp = express();

var cars = [
    {
    id: 1,
    name: 'mehran',
    color: 'ed',
    price: 20
},
{
    id: 2,
    name: 'suzu',
    color: 'Rd',
    price: 110
},
{
    id: 3,
    name: 'bbb',
    color: 'Red',
    price: 130
},
]

exp.get('/car',(req,res)=>{
    res.send(cars);
})

exp.get('/car/:id',(req,res)=>{
    res.send(cars.find((car) => req.params.id == car.id));
})

exp.delete('/car/:id',(req,res)=>{
    const object = cars.find((car) => req.params.id == car.id)
    if(cars.indexOf(object)>-1){
        cars.splice(object, 1);
        res.send("removed");
    }
    res.send("not found");
})

exp.delete('/car/name/:name',(req,res)=>{
    const object = cars.find((car) => req.params.name == car.name)
    if(cars.indexOf(object)>-1){
        console.log(cars.indexOf(object)+" removed")
        cars.splice(object, 1);
        res.send("removed");
        return;
    }
    res.send("not found");
})

exp.post('/car/name/',(req,res)=>{
    console.log(req.query.name +" and "+req.query.price)
    const object = cars.find((car) => req.query.name == car.name)
    if(cars.indexOf(object)>-1){
        console.log(cars.indexOf(object)+" updated")
        cars[cars.indexOf(object)].price = req.query.price;
        res.send("updated");
        return;
    }
    res.send("not n found");
})

exp.post('/car/',(req,res)=>{
    if(cars.find((car) => req.query.name == car.name)){
        res.send('change name of car because car name already exists')
        return;
    }else{
        cars.push(makeCar(req.query.name,req.query.color,req.query.price))
        res.send("added");
        return;
    }    
})

function makeCar(name,color = "red" ,price=0 ){
    let car = {
        id : cars.length + 1,
        name : name,
        color : color,
        price : price
    }
    return car;
}

exp.get('/car/price/:price',(req,res)=>{
    res.send(cars.filter((car) => req.params.price <= car.price));
})

exp.get('/car/name/:name',(req,res)=>{
    res.send(cars.find((car) => req.params.name == car.name));
})

exp.listen(3000,()=>{
    console.log("started");
})
