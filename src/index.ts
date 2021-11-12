import Express, { Request, Response } from 'express'
import cors from 'cors'
import users from './users'
import express from 'express'

const app = Express()

app.use(express.json())

app.use(cors())

const hello = (req: Request, res: Response) => {
	res.send(`<h1>Hello World!</h1>`)
}


app.get('/users/:name', users.name)
app.post('/users', users.create)
app.get('/users', users.all)

app.get('/', hello)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`runnig in port! ${PORT}👍`))
