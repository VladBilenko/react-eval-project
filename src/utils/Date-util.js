export default class DateUtil {
  static transformResponseDateString (str) {
    return str.replace(/T/g, ' ').replace(/Z/g, '')
  }
}
