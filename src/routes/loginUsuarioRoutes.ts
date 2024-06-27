// routes/loginUsuarioRoutes.ts
import { Router } from 'express';
import { getLoginUsuarios, crearLoginUsuario } from '../controllers/loginUsuarioController';

const router = Router();

// Definimos las rutas usando las funciones importadas
router.get('/loginUsuario', getLoginUsuarios);
router.post('/loginUsuario', crearLoginUsuario);

export default router;
