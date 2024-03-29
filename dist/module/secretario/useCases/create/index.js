"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSecretario = void 0;
const repository_1 = require("../../repository/repository");
const createSecretarioUseCase_1 = require("./createSecretarioUseCase");
const createSecretarioController_1 = require("./createSecretarioController");
const secretarioRepository = new repository_1.SecretarioRepository();
const createSecretarioUseCase = new createSecretarioUseCase_1.CreateSecretarioUseCase(secretarioRepository);
const createSecretario = new createSecretarioController_1.CreateSecretarioController(createSecretarioUseCase);
exports.createSecretario = createSecretario;
