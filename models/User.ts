// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { IUser } from './IUser';  // Importando a interface IUser

// Definindo o schema de usuário com a interface IUser
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
