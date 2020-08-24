/**
 * @description 判断元素是否为数组
 * @param {*} source
 * @return {Boolen}
 */
export default function isArray (source) {
  if (Array.isArray) return Array.isArray(source)
  else return source instanceof Array
}