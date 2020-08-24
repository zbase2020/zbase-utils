/**
 * @description 判断元素是否为日期
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isDate (source) {
  return Object.prototype.toString.call(source) === '[object Date]';
}