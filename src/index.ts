import Funcionario from "./classes/Funcionario";
import { FuncionarioFixo } from "./classes/FuncionarioFixo";
import { Escala } from "./classes/FuncionarioFixo";

const funcionario = new Funcionario('Jão', new Date('2023-01-01'), "Desenvolvedor", 5000,);

const ana = new Funcionario(
  "Ana",
  new Date("2021-01-01"),
  "Desenvolvedor",
  5000,
  new Date("1990-01-01"),
  "Rua 1",
  "123456789",
);

const pedrinho = new FuncionarioFixo(Escala.SeisPorUm, 'pedrinho', new Date())
