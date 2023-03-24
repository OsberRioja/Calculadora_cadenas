function sumarNumeros(cadena){
    let numeros=cadena.match(/\d+/g);
    if(!numeros)
    {
        return 0;
    }
    let suma=0;
    for(var i=0;i<numeros.length;i++)
    {
        suma=suma+parseInt(numeros[i]);
    }
    return suma;
}

export default sumarNumeros;