let valores = [8,1,5,6,7,9,8]


/*
for(let cont = 0; cont<valores.length;cont++){
    console.log(`A posicao ${cont}, tem o valor ${valores[cont]} `)
}*/

/*for(let cont in valores){
    console.log(valores[cont])
}*/

let pos = valores.indexOf(1)
if(pos == -1){
    console.log("O valor não foi encontrado")
} else{
    console.log(`O valor esta na posicao ${pos}`)
}