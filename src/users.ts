import { Request, Response } from 'express'

export interface USER {
	name: string
	role: string
}

class User {
	id: number
	name: string
	role: string

	constructor({ name, role }: { name: string; role: string }) {
		this.name = name
		this.id = Math.random()
		this.role = role
	}
}

class Athetec extends User {
	constructor(name: string) {
		super({ name, role: 'athetec' })
	}
}
const bryan = new Athetec('bryan')
const sebastian = new Athetec('sebastian')
let usersList: User[] = [bryan, sebastian]

export const name = (req: Request, res: Response): void => {
	const name = req.params.name
	const user = usersList.find((user) => user.name === name)
	res.send(user)
}
/**
 *
 *
 * @returns reutrn all users form the list
 */
export const all = (_req: Request, res: Response) => {
	res.send(usersList)
}

export const create = (req: Request, res: Response) => {
	// handler error
	const error = () => res.status(400).json({ error: 'content missing' })
	if (!req.body.name) return error()
	if (!req.body.role) return error()

	// add new user to usersList
	const user = new User(req.body)
	usersList = usersList.concat(user)

	//
	res.send({me: "sucet"})
}
export default {
	name,
	all,
	create,
}
