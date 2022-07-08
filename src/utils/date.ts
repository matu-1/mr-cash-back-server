export abstract class DateUtils {
  static getMinToday() {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    return today;
  }

  static getMaxToday() {
    const today = new Date();
    today.setHours(23);
    today.setMinutes(59);
    today.setSeconds(59);
    today.setMilliseconds(999);
    return today;
  }

  /**
   * Convierte una fecha que es UTC a Date
   * @param date
   * @returns
   */
  static fromUTC(date: string | Date) {
    const newDate = new Date(date);
    return new Date(
      Date.UTC(
        newDate.getFullYear(),
        newDate.getMonth(),
        newDate.getDate(),
        newDate.getHours(),
        newDate.getMinutes(),
        newDate.getSeconds(),
        newDate.getMilliseconds(),
      ),
    );
  }

  static addDays(date: string | Date, days: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }
}
const nDate = new Date().toLocaleString('es-ES', {
  timeZone: 'UTC',
});
console.log('tz UTC:', nDate, new Date());
