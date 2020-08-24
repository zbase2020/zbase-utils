import isString from '../commonUtil/isString'
/**
 * @description 字符串去重
 * @param {String}  str 字符串
 * @return {String} 字符串去重
 */
export default function uniqueString (str) {
  if (!isString(str)) {
    console.error('传入参数不是字符串')
    return str
  }
  return [...new Set(str.split(''))].join('')
}