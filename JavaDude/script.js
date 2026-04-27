// Classe de Alunos
class aluno {
    constructor(nome){
        this.nome = nome;
    }

    InserirNome(name) {
        this.nome = name;
    }
}

// Adicionar Aluno
function AddAlunos(alunos,aluno) {
    alunos.push(aluno);
}

// Listar Alunos
function ListarAlunos(alunos) {
    if (alunos.lenght === 0) {
        console.log("Vetor Vazio!")
    } else {
        console.log("Todos os alunos registrados: ")
        for(let i = 0; i < alunos.lenght; i++) {
            console.log(alunos[i]);
        }
    }
}

// Buscar Aluno
function BuscarAluno(alunos, aluno) {
    if (alunos.find(aluno) == false) {
        alert("Alunos não encontrado!")
    } else {
        alert("Aluno encontrado!")
    }
}

function AlterAluno(aluno) {
    let name = prompt("Digite um novo nome: ");
    aluno.InserirNome(name);
}

// Remover Aluno
function PopAlunos(alunos, aluno) {
    alunos.pop(aluno);
}

let alunos = [];

let a1 = new aluno("Lucas")
let a2 = new aluno("Marcos")

a1.InserirNome("Luís")

AlterAluno(a1)

console.log(a1)




