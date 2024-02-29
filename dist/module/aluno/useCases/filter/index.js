"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterAluno = void 0;
const repository_1 = require("../../repository/repository");
const filtertAlunoController_1 = require("./filtertAlunoController");
const filterAlunoUseCase_1 = require("./filterAlunoUseCase");
const alunoRepository = new repository_1.AlunoRepository();
const filterAlunoUseCase = new filterAlunoUseCase_1.FilterAlunoUseCase(alunoRepository);
const FilterAluno = new filtertAlunoController_1.FilterAlunoController(filterAlunoUseCase);
exports.FilterAluno = FilterAluno;