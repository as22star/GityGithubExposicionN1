"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/loginUsuarioRoutes.ts
const express_1 = require("express");
const loginUsuarioController_1 = require("../controllers/loginUsuarioController");
const router = (0, express_1.Router)();
// Definimos las rutas usando las funciones importadas
router.get('/loginUsuario', loginUsuarioController_1.getLoginUsuarios);
router.post('/loginUsuario', loginUsuarioController_1.crearLoginUsuario);
exports.default = router;
