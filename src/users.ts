import { Request, Response } from 'express'

class User {
	id: number
	name: string
	role: string

	constructor(name: string) {
		this.name = name
		this.id = Math.random()
		this.role = 'user'
	}
}

class Athetec extends User {
	constructor(name: string) {
		super(name)
		this.role = 'athetec'
	}
}
const bryan = new Athetec('bryan')
const sebastian = new Athetec('sebastian')
let usersList: User[] = [bryan, sebastian]

const name = (req: Request, res: Response): void => {
	const name = req.params.name
	const user = usersList.find((user) => user.name === name)
	res.send(user)
}

const all = (req: Request, res: Response) => {
	res.send(usersList)
}

const create = (req:Request, res: Response) => {
  const name = req.body.name
  usersList = usersList.concat(new User(name))
	console.log(name)
	res.send(req.body)
}

export default { name, all, create }
