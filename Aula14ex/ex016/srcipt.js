function contar(){
    let txtInicio = document.getElementById(`txtInicio`)
    let txtFim = document.getElementById(`txtFim`)
    let txtPasso = document.getElementById(`txtPasso`)
    let resultado = document.getElementById("resultado")

    resultado.innerHTML=`Contando <br/>`

    if(txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0 ){
        resultado.innerHTML=`Impossivel realizar a contagem! Preencha os campos`
    }else{
        let inicio = Number(txtInicio.value)
        let fim = Number(txtFim.value)
        let passo = Number(txtPasso.value)

        if(passo<=0){
            window.alert("Passo passa para 1 e deixa de ser 0!")
            passo=1
        }

        if(inicio<=fim) {
            for(let c = inicio; c<=fim; c+=passo){
                resultado.innerHTML+=`${c}, `

            }
        } else if (inicio>=fim) {
            for(let c = inicio; c>=fim; c-=passo){
                resultado.innerHTML+=`${c}, `
            }
        }
        resultado.innerHTML+="Fim..."
    }

    


}