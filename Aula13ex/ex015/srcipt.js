function verificar() {
    var txtano = window.document.getElementById("txtano") 
    var ano = Number(txtano.value)
    var sex = window.document.getElementsByName("radsex")
    var date = new Date()
    var anoatual = date.getFullYear()
    var idade= anoatual-ano
    var resultado = window.document.getElementById("res")
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
 
    if(txtano.value.length == 0 || txtano > anoatual){
        window.alert("[Erro] Verifique os dados e tente novamente")
    } 
    
    if (sex[1].checked){
        genero = "Mulher"
        if(idade >= 0 && idade < 5) {
            img.setAttribute("src", "bebe-menina.png")
        }
        else if (idade >= 5 && idade < 10){
            img.setAttribute("src", "crianca-menina.png")
        } else if (idade < 21){
            img.setAttribute("src", "jovem-menina.png")
        } else if (idade < 50){
            img.setAttribute("src", "mulher-adulta .png")
        } else {
            img.setAttribute("src", "idosa-mulher.png")
        }
         
    } else if(sex[0].checked) {
        genero = "Homem"
        if(idade >= 0 && idade < 5) {
            img.setAttribute("src", "bebe-menino.png")
        }
        else if (idade >= 5 && idade < 10){ img.setAttribute("src", "crianca-menino.png")

        } else if (idade < 21){
            img.setAttribute("src", "jovem-menino.png")
        } else if (idade < 50){
            img.setAttribute("src", "homem-adulto.png")
        } else {
            img.setAttribute("src", "idoso-homem.png")
        }
    }

    resultado.style.textAlign="center"
    resultado.innerHTML=`Detetamos ${genero} com ${idade} anos!`
    resultado.appendChild(img)
    
    


}