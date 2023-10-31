import { plainToClass, classToPlain } from 'class-transformer';
import { Moneda } from '../models/Moneda';

export class MonedaSerializer {
  static toPlain(moneda: Moneda): Record<string, any> {
    return classToPlain(moneda);
  }

  static fromPlain(data: Record<string, any>): Moneda {
    return plainToClass(Moneda, data);
  }
}