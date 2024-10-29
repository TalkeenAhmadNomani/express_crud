import express from 'express';
const app = express();

const port = 3000;
app.get("/", (req, res)=>{
    res.send(" hey i m talkeen")
})


app.use(express.json());
let tea = [];
let nextid = 1;

app.post('/teas', (req, res)=>{
    const { name, price} = req.body;
    const newtea = { id: nextid++, name, price}
    tea.push(newtea);
    res.status(201).send(newtea);

})
app.get('/teas', (req, res)=>{
    res.status(202).send(tea);
})
//find sin g;le tea
app.get('/teas/:s', (req, res)=>{
    const te = tea.find(t=> t.s === parseInt(req.params.s))
    if(!te){
        return res.status(404).send("not found")
    }
    res.status(202).send(te)
})
// update
app.put('/teas/:i', (req, res)=>{
    const te = tea.find(t.id === parseInt(req.params.i))
     if(!te){
        return res.status(404).send("not found")
    }
    const {name, price} = req.body
    te.name = name;
    te.price = price;
    res.send(200).send(te);
})
// delete route...
app.delete('/teas/:w', (req, res)=>{
   const index = tea.findIndex(t=> t.w===parseInt(req.params.w)
    )
    if(index === -1){
        return res.status(404).send("not found")
    }
    tea.splice(index, 1)
     return res.status(202).send('deleted')
})


app.listen(port, ()=>{
    console.log("server is running")
})
