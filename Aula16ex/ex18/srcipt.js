let num = document.getElementById(`txtnum`)
let lista = document.getElementById(`txtselect`)
let res = document.getElementById(`res`)
let vetor = []

function isNumber(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(n)!=-1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, vetor)){
       vetor.push(num.value)
       let item = document.createElement(`option`)
       item.text=`Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML=" "

    }else{
        window.alert(`Valor invalido ou ja esta registado`)
    }
    num.value=` `
    num.focus()
}

function finalizar(){
    if(vetor.length==0){
        window.alert(`A lista esta vazia`)
    }else{
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        for(cont in vetor){
            soma += Number(vetor[cont])
            media = soma / 2
            if(vetor[cont]>maior){
                maior = vetor[cont]
            } if(vetor[cont]<menor){
                menor= vetor[cont]
            }
            res.innerHTML=` `
            res.innerHTML+=`<p>Total de elementos ${total}</p> `
            res.innerHTML+=`<p>Maior ${maior}</p> `
            res.innerHTML+=`<p>Menor ${menor}</p> `
            res.innerHTML+=`<p>Soma ${soma}</p>`
            res.innerHTML+=`<p>Media ${media}</p> `
            
        }
    }
}