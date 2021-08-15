import  Express  from "express";

const app = Express()

app.get('/',(req,res)=> {
res.send('hola mundo!')
})

app.listen(3001,()=>console.log('runnig'))