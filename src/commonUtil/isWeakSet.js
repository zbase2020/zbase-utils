/**
 * @description 判断元素是否为WeakSet
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isWeakSet (source) {
  return Object.prototype.toString.call(source) === '[object WeakSet]';
}