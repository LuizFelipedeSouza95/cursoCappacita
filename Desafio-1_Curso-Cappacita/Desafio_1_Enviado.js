//LISTA DE CLIENTES
dadosClientes = [
{
nome: "Lucas",
sobrenome: "da Silva",
idade: 21,
genero: "Masculino",
plano: "full",
carencia: false,
aquisicao: "12/01/2019"
},
{
nome: "Ana",
sobrenome: "Lima",
idade: 17,
genero: "Feminino",
plano: "medium",
carencia: false,
aquisicao: "17/03/2019"
},
{
nome: "Adriana",
sobrenome: "Menezes",
idade: 27,
genero: "Feminino",
plano: "full",
carencia: true,
aquisicao: "14/09/2020"
},
{
nome: "Luiz",
sobrenome: "Felipe",
idade: 26,
genero: "Masculino",
plano: "full",
carencia: true,
aquisicao: "23/10/2020"
},
{
nome: "Iasmin",
sobrenome: "Braga",
idade: 25,
genero: "Feminino",
plano: "full",
carencia: true,
aquisicao: "12/11/2020"
},
{
nome: "Iran",
sobrenome: "Felipe",
idade: 18,
genero: "Masculino",
plano: "full",
carencia: true,
aquisicao: "04/12/2014"
}
]

//FILTRO PARA PEGAR AS IDADES >= 18 E <= 26
function filtrar(valor) {
return valor.idade >= 18 && valor.idade <= 26;
}

// CHAMA A FUNÇÃO
var ﬁltrado = dadosClientes.filter(filtrar);

//MOSTRA O RESULTADO
console.log(ﬁltrado);