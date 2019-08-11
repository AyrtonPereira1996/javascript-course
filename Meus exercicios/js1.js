var anoNascimento = 1950
var date= new Date()
var anoAtual = date.getFullYear()

var idade = anoAtual - anoNascimento

if(idade<5){
    console.log("O usuário é bébé!")
    console.log(idade)
} else if(idade>=5 && idade<=13){
    console.log("O usuário é criança")
    console.log(idade)
}else if(idade>=14 && idade<=19){
    console.log("O usuário é adolescente")
    console.log(idade)
}else if(idade>=20 && idade<=55){
    console.log("O usuário é adulto")
    console.log(idade)
}else {
    console.log("O usuário é idoso")
    console.log(idade)
}