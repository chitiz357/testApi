import  Express  from "express";

const app = Express()

app.get('/',(req,res)=> {
res.send('hola mundo!')
})

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>console.log(`runnig in port ${PORT}`))