/**
 * @description 判断元素是否为DOM元素
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isElement (source) {
  return !!(source && source.nodeType === 1);
}