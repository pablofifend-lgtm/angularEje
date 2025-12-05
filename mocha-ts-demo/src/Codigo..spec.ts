import { assert } from "chai";
import {Cuadrado,Circulo} from "../src/Codigo."

describe ("Test de Cuadrado Perimetro", ()=> {
    it("deberia de devolver 8 cuando el lado es 2 ",
        ()=> {
            const resultado = new Cuadrado(2).damePerimetro();
            assert.equal(resultado,8);})
        });
