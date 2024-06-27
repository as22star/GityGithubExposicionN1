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
exports.crearCliente = exports.getClientes = void 0;
const Cliente_1 = __importDefault(require("../models/Cliente"));
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield Cliente_1.default.find();
        res.json(clientes);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getClientes = getClientes;
const crearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoCliente = new Cliente_1.default({
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
        const clienteGuardado = yield nuevoCliente.save();
        res.status(201).json(clienteGuardado);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.crearCliente = crearCliente;
