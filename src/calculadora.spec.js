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
});