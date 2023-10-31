import { Moneda } from "../models/Moneda";
import { MonedaSerializer } from "../serializers/MonedaSerializer";
import { MonedaSchema } from "../schemas/MonedaSchema";

export class BolsaController {
  static probarMoneda(): Moneda {
    const dolar: Moneda = new Moneda("Dolar", "USD");
    return dolar;
  }

  static probarMonedaSerializer(): Record<string, any> {
    const dolar: Moneda = BolsaController.probarMoneda();
    const x: Record<string, any> = MonedaSerializer.toPlain(dolar);
    return x;
  }

  static guardarMoneda(nombre: string, simbolo: string): Moneda {
    const moneda: Moneda = new Moneda(nombre, simbolo);
    const monedaSerializada: Record<string, any> = MonedaSerializer.toPlain(moneda);
    const monedaSchema = new MonedaSchema ( monedaSerializada );
    monedaSchema.save()
    return moneda;
  }

  static async listarMonedas() {
    try {
      const monedas = await MonedaSchema.find({}); 
      monedas.forEach(monedaSchema => {
        const moneda = MonedaSerializer.fromPlain(monedaSchema);
        console.log(moneda);
        
        console.log(monedaSchema);
      });
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  }
}
