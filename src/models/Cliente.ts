// models/Cliente.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICliente extends Document {
    cedula: string;
    nombres: string;
    apellidos: string;
    celular: string;
    correo: string;
    fechaNacimiento: Date;
    provincia: string;
    ciudad: string;
    callePrincipal: string;
    calleSecundaria: string;
}

const ClienteSchema: Schema = new Schema({
    cedula: { type: String, required: true, unique: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    celular: { type: String, required: true },
    correo: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    provincia: { type: String, required: true },
    ciudad: { type: String, required: true },
    callePrincipal: { type: String, required: true },
    calleSecundaria: { type: String, required: true }
}, { collection: 'Cliente' });

const Cliente = mongoose.model<ICliente>('Cliente', ClienteSchema);

export default Cliente;
