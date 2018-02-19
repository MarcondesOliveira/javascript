// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
       return 'Oi gente!' 
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal{
    corre(){
        return 'Correndo...'
    }
}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}

class Gato extends Animal{
    falar(){
        return 'Miau!'
    }
}

console.log(new Cachorro().falar(), new Cachorro().corre())

console.log(new Gato().falar(), new Gato().corre())