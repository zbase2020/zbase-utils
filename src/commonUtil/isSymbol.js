/**
 * @description 判断元素是否为Symbol
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isSymbol (source) {
  return Object.prototype.toString.call(source) === '[object Symbol]';
}