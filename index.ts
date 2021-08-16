import  Express  from "express";
import cors from 'cors'

const app = Express()

app.use(cors)

app.get('/',(req,res)=> {
res.send('hola mundoo!')
})

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>console.log(`runnig in port!!!! ${PORT}`))