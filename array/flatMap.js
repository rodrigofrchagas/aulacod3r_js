const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustagol',
        nota: 5.5
    }, {
        nome: 'Gabigol',
        nota: 9.9
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Gerson Aulas',
        nota: 9.5
    }, {
        nome: 'Uilharão',
        nota: 6.6
    }]
}];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

console.log([].concat([ 5.5, 9.9 ], [9.5, 6.6]));

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);