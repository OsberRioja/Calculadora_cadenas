function sumarNumeros(cadena){
    if(cadena=="")
    {
        return 0;
    }
    else{
        var numeros=cadena.split(",");
        if(numeros.length==1){
            return parseInt(numeros[0]);
        }
        else{
            return parseInt(numeros[0])+parseInt(numeros[1]);
        }
    }
}

export default sumarNumeros;