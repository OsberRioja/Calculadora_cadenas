function sumarNumeros(cadena){
    if(cadena=="")
    {
        return 0;
    }
    else{
        var numeros=cadena.split(",");
        var suma=0;
        if(numeros.length==1){
            return parseInt(numeros[0]);
        }
        else{
            for(let i=0;i<numeros.length;i++){
                suma=suma+parseInt(numeros[i]);
            }
            return suma;
        }
    }
}

export default sumarNumeros;