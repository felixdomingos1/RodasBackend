"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePropina = void 0;
const repository_1 = require("../../repository/repository");
const DeletePropinaUseCase_1 = require("./DeletePropinaUseCase");
const DeletePropinaController_1 = require("./DeletePropinaController");
const propinaRepository = new repository_1.PropinaRepository();
const deletePropinaUseCase = new DeletePropinaUseCase_1.DeletePropinaUseCase(propinaRepository);
const DeletePropina = new DeletePropinaController_1.DeletePropinaController(deletePropinaUseCase);
exports.DeletePropina = DeletePropina;
