import { BolsaController } from "../../controllers/BolsaController";
import { Moneda } from "../../models/Moneda";

const prueba: Moneda = BolsaController.probarMoneda()

console.log(prueba)