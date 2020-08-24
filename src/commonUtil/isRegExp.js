/**
 * @description 判断元素是否为正则
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isRegExp (source) {
  return Object.prototype.toString.call(source) === '[object RegExp]';
}