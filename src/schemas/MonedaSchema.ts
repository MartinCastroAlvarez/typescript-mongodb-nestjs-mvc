import { mongoose } from "../services/MongoService";

export const MonedaSchema = mongoose.model("Moneda", {
    nombre: String,
    simbolo: String,
  });