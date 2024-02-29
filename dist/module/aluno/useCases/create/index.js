"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAluno = void 0;
const repository_1 = require("../../repository/repository");
const createAlunoController_1 = require("./createAlunoController");
const createAlunoUseCase_1 = require("./createAlunoUseCase");
const alunoRepository = new repository_1.AlunoRepository();
const createAlunoUseCase = new createAlunoUseCase_1.CreateAlunoUseCase(alunoRepository);
const createAluno = new createAlunoController_1.CreateAlunoController(createAlunoUseCase);
exports.createAluno = createAluno;