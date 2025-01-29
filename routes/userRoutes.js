"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User")); // Certifique-se de que o caminho está correto
const router = express_1.default.Router();
// Rota POST para criar um novo usuário
router.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = request.body;
        const newUser = new User_1.default({ name, email, password });
        yield newUser.save();
        response.status(201).json(newUser);
    }
    catch (err) {
        response.status(400).json({ message: err.message });
    }
}));
// Rota PUT para atualizar um usuário existente
router.put('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = request.body;
        const user = yield User_1.default.findByIdAndUpdate(request.params.id, { name, email, password }, { new: true });
        if (!user) {
            return response.status(404).json({ message: 'Usuário não encontrado' });
        }
        response.json(user);
    }
    catch (err) {
        response.status(400).json({ message: err.message });
    }
}));
exports.default = router;
