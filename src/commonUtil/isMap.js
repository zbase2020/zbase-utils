/**
 * @description 判断元素是否为Map
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isMap (source) {
  return Object.prototype.toString.call(source) === '[object Map]';
}