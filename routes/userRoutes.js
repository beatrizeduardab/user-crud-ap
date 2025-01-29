const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Certifique-se de que o caminho está correto

// Rota POST para criar um novo usuário
router.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        response.status(201).json(newUser);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
});

// Rota PUT para atualizar um usuário existente
router.put('/:id', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const user = await User.findByIdAndUpdate(
            request.params.id,
            { name, email, password },
            { new: true }
        );

        if (!user) {
            return response.status(404).json({ message: 'Usuário não encontrado' });
        }

        response.status(200).json(user);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
});

// Rota DELETE para deletar um usuário existente
router.delete('/:id', async (request, response) => {
    try {
        const user = await User.findByIdAndDelete(request.params.id);

        if (!user) {
            return response.status(404).json({ message: 'Usuário não encontrado' });
        }

        return response.status(200).json({ message: 'Usuário deletado com sucesso', user });
    } catch (error) {
        return response.status(500).json({ message: 'Erro ao deletar usuário', error: error.message });
    }
});

module.exports = router;