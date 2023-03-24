function sumarNumeros(cadena){
    if(cadena=="")
    {
        return 0;
    }
    else{
        numeros=cadena.split(",");
        return numeros[0]+numeros[1];
    }
}

export default sumarNumeros;