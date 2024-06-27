import { Router } from 'express';
import { getClientes, crearCliente } from '../controllers/clienteController';

const router = Router();

// Definimos las rutas usando las funciones importadas
router.get('/cliente', getClientes);
router.post('/cliente', crearCliente);

export default router;
