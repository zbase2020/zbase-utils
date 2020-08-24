/**
 * @description 判断元素是否为错误
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isError (source) {
  return Object.prototype.toString.call(source) === '[object Error]';
}