import sumarNumeros from "./calculadora.js";

describe("Sumar", () => {
  it("una cadena vacia deberia devolver 0", () => {
    let cadena="";
    expect(sumarNumeros(cadena)).toEqual(0);
  });
});