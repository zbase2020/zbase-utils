/**
 * @description 对象是否存在某个属性
 * @param {Object}  obj 对象
 * @param {String}  name 属性名
 * @return {Boolean} 对象是否存在某个属性
 */
export default function has (obj, name) {
  return Object.prototype.hasOwnProperty.call(obj, name)
}