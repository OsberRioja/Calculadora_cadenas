import sumarNumeros from "./calculadora.js";

describe("Sumar", () => {
  it("una cadena vacia deberia devolver 0", () => {
    let cadena="";
    expect(sumarNumeros(cadena)).toEqual(0);
  });
  it("una cadena con un solo numero deberia devolver el numero", () => {
    let cadena="1";
    expect(sumarNumeros(cadena)).toEqual(1);
  });
  it("dos numeros separados por comas deberia devolver la suma de ambos numeros", () => {
    let cadena="4,1";
    expect(sumarNumeros(cadena)).toEqual(5);
  });
  it("sumar mas de 2 numeros separados por ,", () => {
    let cadena="4,1,5,10";
    expect(sumarNumeros(cadena)).toEqual(20);
  });
  it("sumar mas de 2 numeros separados por cualquier caracter", () => {
    let cadena="4.1,5-10";
    expect(sumarNumeros(cadena)).toEqual(20);
  });
  it("numeros mayores a 1000 son ignorados", () => {
    let cadena="4.1,5-10,1001";
    expect(sumarNumeros(cadena)).toEqual(20);
  });
  it("poner delimitador en corchete", () => {
    let cadena="[;]4;1;5;10";
    expect(sumarNumeros(cadena)).toEqual(20);
  });
  it("poner mas de un delimitador en corchetes", () => {
    let cadena="[;],[*],4;1;5*10";
    expect(sumarNumeros(cadena)).toEqual(20);
  });
  it("poner delimitador de mas de un caracter", () => {
    let cadena="[****],4****1****5****10";
    expect(sumarNumeros(cadena)).toEqual(20);
  });  
});