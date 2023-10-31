import { BolsaController } from "../../controllers/bolsaController";
import { Moneda } from "../../models/Moneda";

const prueba: Record<string, any> = BolsaController.probarMonedaSerializer()

console.log(prueba)