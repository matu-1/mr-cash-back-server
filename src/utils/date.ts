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
}
const nDate = new Date().toLocaleString('es-ES', {
  timeZone: 'UTC',
});

console.log(nDate, new Date());
