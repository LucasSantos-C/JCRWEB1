class Aluno {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    InserirNome(name) {
        this.nome = name;
    }

    InserirIdade(age) {
        this.idade = age;
    }
}


function AddAlunos(alunos) {
    let nome = prompt("Digite o nome do aluno: ")
    let idade = parseInt(prompt("Digite a idade do aluno: "))
    let novoAluno = new Aluno(nome, idade);
    alunos.push(novoAluno);
    console.log(`Aluno "${nome}" adicionado com sucesso!`)
}


function ListarAlunos(alunos) {
    if (alunos.length === 0) {
        console.log("Vetor Vazio!")
    } else {
        console.log("Todos os alunos registrados: ")
        alunos.forEach((aluno, index) => {
            console.log(`${index + 1} | ${aluno.nome} | ${aluno.idade}`)
        });
    }
}


function BuscarAluno(alunos) {
    let nome = prompt("Digite o nome do aluno a ser buscado: ");
    let encontrado = alunos.find(aluno => aluno.nome === nome);

    if (!encontrado) {
        console.log(`Aluno "${nome}" encontrado com sucesso!`);
    } else {
        console.log("Aluno encontrado!");
    }
}


function AlterAluno(alunos) {
    let nome = prompt("Digite um aluno a ser alterado: ");

    let aluno = alunos.find(function(a) {
        return a.nome === nome;
    });

    if (aluno) {
        let novoNome = prompt("Digite o novo nome: ");
        let novaIdade = parseInt(prompt("Digite a nova idade: "))

        aluno.InserirNome(novoNome);
        aluno.InserirIdade(novaIdade);

        console.log(`Aluno "${nome}" alterado para "${novoNome}" com sucesso!`);
    } else {
        console.log("aluno não encontrado");
    }
}


function PopAlunos(alunos) {
    let nome = prompt("Digite um novo nome a ser removido: ");
    let index = alunos.findIndex(aluno => aluno.nome === nome);
    
    if(index !== -1) {
        let removido = alunos.splice(index, 1);
        console.log(`Aluno "${nome}" Removido com sucesso`)
    } else {
        console.log("Aluno não encontrado!");
    }
}


let option = 0;
let alunos = [];

do{
    console.log("=============================================")
    console.log("           GERENCIADOR DE ALUNOS             ")
    console.log("=============================================")
    console.log("1.  Adicionar Aluno")
    console.log("2.  Listar Alunos")
    console.log("3.  Buscar Aluno")
    console.log("4.  Alterar Aluno")
    console.log("5.  Remover Aluno")
    console.log("6.  Sair do Programa")
    console.log("=============================================")

    option = parseInt(prompt("Digite uma opção: "))

    switch (option) {
        case 1: AddAlunos(alunos); break;
        case 2: ListarAlunos(alunos); break;
        case 3: BuscarAluno(alunos); break;
        case 4: AlterAluno(alunos); break;
        case 5: PopAlunos(alunos); break;
        case 6: console.log("Finalizando Programa..."); break;
        default:
            console.log("Digite algo válido!");
            break;
    }
} while(option != 6);
