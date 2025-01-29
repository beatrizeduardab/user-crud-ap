// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

// Definindo a interface IUser que herda de Document
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

// Definindo o schema de usuário
const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Criando o modelo User com base no schema
const User = mongoose.model<IUser>('User', userSchema);

export default User;
