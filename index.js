const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
    },
];

//1. Imprima no console a quantidade de pessoas Total.
console.log(`${data.length} pessoas foram cadastradas`);

//2. Imprima no console a quantidade de pessoas pessoas do sexo feminino.
let sexoFeminino = 0
for (item of data) {
    if (item.sexo == "F") {
        sexoFeminino++
    }

}
console.log(`${sexoFeminino} são do sexo feminino`)

//3. Imprima no console a soma do salário de todas as pessoas.
let somaSal = []
for (index of data) {
    somaSal.push(index.salario)
}
let soma = 0
for (let i of somaSal) {
    soma += i
}

console.log(`${soma} é a soma dos salários`);

//4. Imprima no console a media dos salarios 
console.log(`${(soma / data.length)} é a média dos salarios`);


//. 5. Imprima no console a soma do salário de todos as pessoas do sexo
//Masculino
let salarioM = 0
for (o of data) {
    if (o.sexo === "M") {
        salarioM += o.salario
    }
}
console.log(`${salarioM} é a soma de todos os salários masculinos`);

//media dos salarios dos homens
let somador = 0
for (let p of data) {
    if (p.sexo !== "F") {
        somador++
    }
}
let mediaM = salarioM / somador

console.log(`${mediaM} é a media dos salarios dos homens`)

//7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
let existeSalarioMaiorQue700 = false
for (const pessoa of data) {
    if (pessoa.salario >= 7000) {
        existeSalarioMaiorQue700 = true
    }
}
console.log(`existe salario maior que 7000?: ${existeSalarioMaiorQue700}`)

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
//nome 'Eva Trindade'.
const posicaoEva = data.findIndex(item => item.nome === 'Eva Trindade');
console.log('Posição de Eva Trindade:', posicaoEva);



//9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
//sobrenome "Silva".
const pessoasComSobrenomeSilva = data.filter(item => item.nome.includes('Silva'));
console.log('Pessoas com sobrenome Silva:', pessoasComSobrenomeSilva);

//10. Imprima os nomes utilizando o MAP
const nomes = data.map(item => item.nome);
console.log('Nomes:', nomes);
