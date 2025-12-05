export class Circulo
{
    constructor(public radio:number)
    {}
    dameSuperficie():number
    {
        return Math.PI*this.radio*this.radio;
    }
    damePerimetro(): number
    {
        return 2*Math.PI*this.radio;
    }
}
export class Cuadrado
{
    constructor(public lado:number)
    {

    }
    dameSuperficie(): number
    {
        return this.lado * this.lado;
    }

    damePerimetro(): number
    {
        return this.lado*4;
    }
}