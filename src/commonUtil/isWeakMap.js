/**
 * @description 判断元素是否为WeakMap
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isWeakMap (source) {
  return Object.prototype.toString.call(source) === '[object WeakMap]';
}