export class Utility {
    /**
     * Generar Copia de un Objeto
     * @param obj objecto a copiar
     */
    static copyObj<T>(obj: T): T {
      return JSON.parse(JSON.stringify(obj));
    }
  
    /**
     * Compara los valores de dos objetos con la misma estructura
     * @param obj1 objeto
     * @param obj2 objeto
     */
    static compareObjects<T>(obj1: T, obj2: T): boolean {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
  }
  