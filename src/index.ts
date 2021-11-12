import Express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import {name ,create ,all} from './users'
import express from 'express'

const app = Express()

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
	console.log('---')
	console.log('Method:', req.method)
	console.log('Path:  ', req.path)
	console.log('Body:  ', req.body)

	console.log('---')
	next()
}

app.use(express.json())
app.use(cors())
// app.use(requestLogger)

const hello = (req: Request, res: Response) => {
	res.send(`<h1>Hello World!</h1>`)
}

app.post('/users', create)
app.get('/users', all)
app.get('/users/:name', name)

app.get('/', hello)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`runnig in port! ${PORT}👍`))
