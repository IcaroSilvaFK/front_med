export class NumberUtil {
  static formatCurrency(value: number) {
    return this.format(value, {
      style: 'currency',
      currency: 'BRL',
    });
  }

  private static format(value: number, opts: Intl.NumberFormatOptions) {
    return new Intl.NumberFormat('pt-BR', opts).format(value);
  }
}