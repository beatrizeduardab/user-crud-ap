import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes'; // Certifique-se de que o caminho está correto

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

// Conectar ao banco de dados
const mongoUri: string | undefined = process.env.MONGO_URI;

if (!mongoUri) {
    console.error("Erro: A variável de ambiente MONGO_URI não está definida.");
    process.exit(1); // Encerra o processo caso a URI do banco não esteja configurada
}

mongoose
    .connect(mongoUri, { 
        // Correção para TypeScript (opções de conexão atualizadas)
        serverSelectionTimeoutMS: 5000, // Tempo limite para seleção do servidor
    })
    .then(() => {
        console.log('✅ Conectado ao banco de dados');
    })
    .catch((err: unknown) => {
        console.error('❌ Erro ao conectar ao banco de dados:', err);
        process.exit(1); // Encerra a aplicação se a conexão falhar
    });

// Usar as rotas de usuário
app.use('/users', userRoutes);

const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
