/**
 * @description 判断元素是否为Set
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isSet (source) {
  return Object.prototype.toString.call(source) === '[object Set]';
}