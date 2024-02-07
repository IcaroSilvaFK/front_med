
export class DateTimeUtil {
  static genDaysOfWeek() {

    const days: Set<Date> = new Set()

    const currentDate = new Date()

    const first = currentDate.getDate() - currentDate.getDay() + 1

    currentDate.setDate(first)

    for (let i = 0; i < 7; i++) {
      const day = new Date(+currentDate)
      days.add(day)
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return Array.from(days)
  }

  static formatDayOfWeek(day: Date) {
    return this.format(day, { weekday: "short" })
  }

  static formatDate(date: Date) {
    return this.format(date)
  }

  private static format(value: Date, opts?: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat('pt-BR', opts).format(value);

  }

}
