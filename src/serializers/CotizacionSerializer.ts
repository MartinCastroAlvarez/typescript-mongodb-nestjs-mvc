import { plainToClass, classToPlain } from 'class-transformer';
import { MonedaSerializer } from './MonedaSerializer';
import { Cotizacion } from '../models/Cotizacion';

export class CotizacionSerializer {
  static toPlain(cotizacion: Cotizacion): Record<string, any> {
    return {
      moneda1: MonedaSerializer.toPlain(cotizacion.moneda1),
      moneda2: MonedaSerializer.toPlain(cotizacion.moneda2),
      valor: cotizacion.valor,
      fecha: cotizacion.fecha,
    };
  }

  static fromPlain(data: Record<string, any>): Cotizacion {
    return plainToClass(Cotizacion, {
      moneda1: MonedaSerializer.fromPlain(data.moneda1),
      moneda2: MonedaSerializer.fromPlain(data.moneda2),
      valor: data.valor,
      fecha: data.fecha,
    });
  }
}