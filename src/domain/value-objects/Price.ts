export class Price {
    private constructor(readonly amount: number, readonly currency: "EUR" | "USD" ) {}

    static create(amount: number, currency: "EUR" | "USD"):  {
        
        //regla de negocio: el precio no puede ser negativo y debe ser un numero finito
        if (!Number.isFinite(amount) || amount < 0) {
            throw new Error("Amount must be a non-negative finite number");
        }
        //regla de negocio: redondear a dos decimales
        const rounded = Math.round(amount * 100) / 100;
        return new Price(rounded, currency);
       
    }
}