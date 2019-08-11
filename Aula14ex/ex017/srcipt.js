function tabuada(){
    let txtNumber = document.getElementById("txtNumber")
    let tab = document.getElementById("txtSelect")

    if(txtNumber.value.length == 0){
        window.alert("Por favor escolha um numero")
    } else{
        let valor = Number(txtNumber.value)
        tab.innerHTML=" "

        for(let cont = 0; cont<=10; cont++){
            let item = document.createElement(`option`)
            item.text=`${valor} x ${cont}=${valor * cont}`
            tab.appendChild(item)
        }
    }
}
