import Express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { name, create, all } from './users';
import express from 'express';
import { Note } from './models';

const app = Express();

let notes: Note[] = [
	{
		tittle: 'primero',
		content: 'cosa primera',
		id: 1,
		important: true,
	},
	{
		tittle: 'hola',
		content: 'Hola Mundo!!!',
		id: 2,
		important: true,
	},
	{
		tittle: 'final',
		content: 'Procula que tus palabras sean mejor que el silencio',
		id: 3,
		important: true,
	},
];

const getOneNote = (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const note = notes.find((note) => note.id === id);

	res.send(note);
};

const getNotes = (_req: Request, res: Response) => {
	res.send(notes);
};

const postNote = (req: Request, res: Response) => {
	const { content, tittle, important } = req.body;
	const newNote: Note = {
		content,
		tittle,
		important,
		id: Math.random(),
		date: new Date(),
	};

	notes.push(newNote);
	res.send(newNote);
};

const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
	console.log('---');
	console.log('Method:', req.method);
	console.log('Path:  ', req.path);
	console.log('Body:  ', req.body);

	console.log('---');
	next();
};

app.use(express.json());
app.use(cors());
// app.use(requestLogger)

const hello = (_req: Request, res: Response) => {
	res.send(`<h1>Hello World!</h1>`);
};

app.post('/users', create);
app.get('/users', all);
app.get('/users/:name', name);

app.post('/api/notes', postNote)
app.get('/api/notes', getNotes);
app.get('/api/notes/:id', getOneNote);

app.get('/', hello);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`runnig in port! ${PORT}👍`));
