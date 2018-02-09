const carrinho = [
    '{ "nome": "Borracha", "preco": "3.45"}',
    '{ "nome": "Caderno", "preco": "13.90"}',
    '{ "nome": "Kit de Lapis", "preco": "41.22"}',
    '{ "nome": "Caneta", "preco": "7.50"}',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenaspreco = produto => produto.preco

const resultato = carrinho.map(paraObjeto).map(apenaspreco)
console.log(resultato)
