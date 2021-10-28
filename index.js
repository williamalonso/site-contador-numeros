function calcula() {
    var inicio = window.document.querySelector('input#id_inicio')
    var fim = window.document.querySelector('input#id_fim')
    var passo = window.document.querySelector('input#id_passo')


    var c = parseInt(inicio.value) // transforma o dado em número
    var d = parseInt(fim.value)
    var e = parseInt(passo.value)
    
    //alert(d)

    if( c < 0 || d < 0 || e < 0) {

        window.alert("Inserir números positivos")

    } else if(Number.isNaN(c) || Number.isNaN(d) || Number.isNaN(e)) { // verifica se não foi digitado nenhum valor. Quando não é digitado, o form retorna um "NaN" = not a number

        window.alert("Impossível contar")

    } else if (e == 0) {

        window.alert("Passo será considerado como 1")
        e = 1
        
        window.document.getElementById('id_resultado').innerHTML = ''
        if(c <= d) {
            while (c <= d) {
                window.document.getElementById('id_resultado').innerHTML = window.document.getElementById('id_resultado').innerHTML + c + '&#128073'
                c = c + e
                //o emoji também pode ser colocado como "window.document.getElementById('id_resultado').innerHTML + `${c} \u{128073}` "
                //obs: o código Unicode do emoji precisa ficar dentro do ``
            }
            window.document.getElementById('id_resultado').innerHTML = window.document.getElementById('id_resultado').innerHTML + '&#129297'
        } else {
            while (c > d) {
                window.document.getElementById('id_resultado').innerHTML = window.document.getElementById('id_resultado').innerHTML + c + '&#128073'
                c = c - e
                
            }
            window.document.getElementById('id_resultado').innerHTML = window.document.getElementById('id_resultado').innerHTML + '&#129297'
        }
    } 
    else {
        window.document.getElementById('id_resultado').innerHTML = ''
        if(c <= d) {
            while (c <= d) {
                window.document.getElementById('id_resultado').innerHTML = window.document.getElementById('id_resultado').innerHTML + c + '&#128073'
                c = c + e
                
            }
            window.document.getElementById('id_resultado').innerHTML = window.document.getElementById('id_resultado').innerHTML + '&#129297'
        } else {
            while (c > d) {
                window.document.getElementById('id_resultado').innerHTML = window.document.getElementById('id_resultado').innerHTML + c + '&#128073'
                c = c - e
                
            }
            window.document.getElementById('id_resultado').innerHTML = window.document.getElementById('id_resultado').innerHTML + '&#129297'
        }
    }
    
}