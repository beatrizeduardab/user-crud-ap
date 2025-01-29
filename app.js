"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes")); // Certifique-se de que o caminho está correto
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Conectar ao banco de dados
const mongoUri = process.env.MONGO_URI || '';
mongoose_1.default.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('Conectado ao banco de dados');
})
    .catch(err => {
    console.error('Erro ao conectar ao banco de dados', err);
});
// Usar as rotas de usuário
app.use('/users', userRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
