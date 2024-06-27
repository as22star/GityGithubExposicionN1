import { Request, Response } from 'express';
import Cliente from '../models/Cliente';

export const getClientes = async (req: Request, res: Response) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const crearCliente = async (req: Request, res: Response) => {
    const nuevoCliente = new Cliente({
        cedula: req.body.cedula,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        celular: req.body.celular,
        correo: req.body.correo,
        fechaNacimiento: req.body.fechaNacimiento,
        provincia: req.body.provincia,
        ciudad: req.body.ciudad,
        callePrincipal: req.body.callePrincipal,
        calleSecundaria: req.body.calleSecundaria
    });

    try {
        const clienteGuardado = await nuevoCliente.save();
        res.status(201).json(clienteGuardado);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};
