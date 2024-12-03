import {randomUUID} from 'crypto'

class Funcionario {

  private nome: string;
	private dataDeNascimento: Date;
	private dataDeAdmissao: Date;
	private cargo: string;
	private salario: number;
	private dataFerias: Date | null;
	private endereco: string | null;
	private telefone: string | null;
	private email: string | null;
	readonly matricula: string;

	constructor (
		nome: string,
		dataDeNascimento: Date,
		dataDeAdmissao: Date,
		cargo: string,
		salario: number,
		dataFerias?: Date,
		endereco?: string,
		telefone?: string,
		email?: string,
	) {
		this.nome = nome;
		this.dataDeNascimento = dataDeNascimento;
		this.dataDeAdmissao = dataDeAdmissao;
		this.cargo = cargo;
		this.salario = salario;
		this.dataFerias = dataFerias ?? null;
		this.endereco = endereco ?? null;
		this.telefone = telefone ?? null;
		this.email = email ?? null;
		this.matricula = randomUUID()

	}
}