/**
 * @description 判断元素是否为布尔值
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isBoolean (source) {
  return source === true || source === false || Object.prototype.toString.call(source) === '[object Boolean]';
}