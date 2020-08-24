import isString from './isString'
import isArray from './isArray'
import isObject from './isObject'
/**
 * @description 判断元素是否为空
 * @param {*} source
 * @return {Boolen}
 */
export default function isEmpty (source) {
  if (source === undefined || source === null) return true
  if (isString(source) || isArray(source))
    return source.length === 0
  if (isObject(source)) return JSON.stringify(source) === '{}'
  else return source.toString().length === 0
}