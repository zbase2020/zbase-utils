  import isString from '../commonUtil/isString'
  /**
   * @description 字符串出现位置
   * @param {String}  str 字符串
   * @return {[]} 字符串出现位置
   */
  export default function positionString (str, query) {
    if (!isString(str) || !isString(query) || str === '' || query === '') {
      console.error('传入参数不是字符串')
      return
    }
    var index = str.indexOf(query)
    var arr = []
    while (index > -1) {
      arr.push(index)
      index = str.indexOf(query, index + 1)
    }
    return arr
  }