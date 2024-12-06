import {randomUUID} from 'crypto';

export class Funcionario {

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

getNome() {
	return this.nome;
}

setNome(nome: string) {
	this.nome = nome;
}

getDataAdmissao() {
	return this.dataDeAdmissao;
}

setDataAdmissao(dataAdmissao: Date) {
	this.dataDeAdmissao = dataAdmissao;
}

getCargo() {
	return this.cargo;
}

setCargo(cargo: string) {
	this.cargo = cargo;
}

getSalario() {
	return this.salario;
}

setSalario(salario: number) {
	this.salario = salario;
}

getDataNascimento() {
	return this.dataDeNascimento;
}

setDataNascimento(dataNascimento?: Date) {
	this.dataDeNascimento = dataNascimento;
}

getDataFerias() {
	return this.dataFerias;
}

setDataFerias(dataFerias?: Date) {
	this.dataFerias = dataFerias;
}

getEndereco() {
	return this.endereco;
}

setEndereco(endereco?: string) {
	this.endereco = endereco;
}

getTelefone() {
	return this.telefone;
}

setTelefone(telefone?: string) {
	this.telefone = telefone;
}

getEmail() {
	return this.email;
}

setEmail(email?: string) {
	this.email = email;
	}
}

//Aqui