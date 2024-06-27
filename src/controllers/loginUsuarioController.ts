// controllers/loginUsuarioController.ts
import { Request, Response } from 'express';
import LoginUsuario, { ILoginUsuario } from '../models/LoginUsuario';

// Obtener todos los login de usuarios
export const getLoginUsuarios = async (req: Request, res: Response) => {
  try {
    const loginUsuarios = await LoginUsuario.find();
    res.json(loginUsuarios);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo login de usuario
export const crearLoginUsuario = async (req: Request, res: Response) => {
  const nuevoLoginUsuario: ILoginUsuario = new LoginUsuario({
    idUsuario: req.body.idUsuario,
    nombreUsuario: req.body.nombreUsuario,
    contraseña: req.body.contraseña,
    cedula: req.body.cedula
  });

  try {
    const loginUsuarioGuardado = await nuevoLoginUsuario.save();
    res.status(201).json(loginUsuarioGuardado);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
