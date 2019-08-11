let vetorNum=[23,94,30,40,10,3,56,43,11,3,44,6,22,26]

    let number=70
    let value = vetorNum.indexOf(number)
    if(value==-1){
        console.log(`O valor ${number}, não foi encontrado`)
    } else{
        console.log(`Fui encontrado valor ${number} de uma estrutura composta de ${vetorNum.length} elementos`)
        console.log(`Esse valor, pertence ao indice ${vetorNum.indexOf(number)}`)
      
    }
