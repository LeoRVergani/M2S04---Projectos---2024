import { Funcionario } from "./Funcionario";

export enum Escala {
    SeisPorUm = "6x1",
    CincoPorUm = "5x1"
}

export class FuncionarioFixo extends Funcionario {

    private escala: Escala;
    private decimoTerceiro: number;
    private valorFgts: number;
    private valorInss: number;

    constructor(
        escala: Escala,
        nome: string,
        dataDeAdmissao: Date,
        cargo: string,
        salario: number,
    
    ) {
        super(nome, dataDeAdmissao, cargo, salario)
        this.escala = escala;
    }
}