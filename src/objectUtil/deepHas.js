/**
 * @description 对象是否存在某个属性，包括原型链
 * @param {Object}  obj 对象
 * @param {String}  name 属性名
 * @return {Boolean} 对象是否存在某个属性
 */
export default function deepHas (obj, name) {
  return name in obj
}
