function valida(){
    var valor = document.querySelector('input#txtvalor')
    var res = window.document.querySelector('div#res')
    var pais = String(valor.value)
    pais = pais.toUpperCase()
    //var pais = valor.toUpperCase()
    console.log(pais)
    if(pais == 'BRASIL'){
        res.innerHTML += 'Você é brasileiro!'
    }else{
        res.innerHTML += `Você é estrangeiro, do país ${pais}`
    }
    
}