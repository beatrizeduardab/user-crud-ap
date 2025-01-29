import { Request, Response, Router } from 'express';
import User from '../models/User';

interface IUserRequest {
    name: string;
    email: string;
    password: string;
}

const router = Router();

// Rota para criar um novo usuário
router.post('/', async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        res.status(400).json({ message: errorMessage });
    }
});

// Rota para atualizar um usuário
router.put('/:id', async (req: Request<{ id: string }, {}, IUserRequest>, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id, 
            { name, email, password }, 
            { new: true }
        ).exec();

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.json(user);
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        res.status(400).json({ message: errorMessage });
    }
});

// Rota para obter todos os usuários
router.get('/', async (req: Request, res: Response) => {
    console.log('GET /users was called');  // Adicione este log
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
});

// Rota para deletar um usuário
router.delete('/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(204).send();
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        res.status(400).json({ message: errorMessage });
    }
});

export default router;
