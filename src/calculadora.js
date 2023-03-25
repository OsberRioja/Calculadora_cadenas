function sumarNumeros(cadena){
    let numeros=cadena.match(/\d+/g);
    
    if(!numeros)
    {
        return 0;
    }
    let suma=0;
    for(var i=0;i<numeros.length;i++)
    {
        if(numeros[i]<=1000){
            suma=suma+parseInt(numeros[i]);
        }
    }
    return suma;
}

export default sumarNumeros;