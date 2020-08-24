import isObject from '../commonUtil/isObject'
import isArray from '../commonUtil/isArray'
import isString from '../commonUtil/isString'
import isIndex from '../commonUtil/isIndex'
/**
 * @description 设置对象属性值
 * @param {Object}  obj 对象
 * @param {String | Array}  path 属性路径
 * @param {*}  value 属性值
 * @return {Object} 对象
 */
export default function setValue (obj, path, value) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return obj
  }
  if (!isArray(path) && !isString(path)) {
    console.error('传入路径必须是数组或字符串')
    return obj
  }
  var pathArr = path
  if (isString(path)) {
    // 结尾 aa.bb[1].cc[0] -> aa.bb[1].cc.0
    var endReg = /(\w+)\[(\d+)\]$/gi
    path = path.replace(endReg, '$1.$2')
    // 路径 aa.bb[1].cc.0 -> aa.bb.1.cc.0
    var reg = /(\w+)\[(\d+)\](.)/gi
    path = path.replace(reg, '$1.$2$3')
    pathArr = path.split('.')
  }
  var len = pathArr.length
  var lastIndex = len - 1
  var sub = obj
  for (var i = 0; i < len; i++) {
    var key = pathArr[i]
    var newValue = value
    if (i !== lastIndex) {
      var objValue = sub[key]
      if (isObject(objValue)) {
        // object
        newValue = objValue
      } else if (isArray(objValue) && isIndex(pathArr[i + 1])) {
        // array
        newValue = objValue
      } else {
        newValue = isIndex(pathArr[i + 1]) ? [] : {}
      }
    }
    sub[key] = newValue
    sub = sub[key]
  }
  return obj
}