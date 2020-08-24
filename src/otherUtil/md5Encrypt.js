const crypto = require('crypto')
/**
 * @description md5加密
 * @param {String} str 需加密字符串
 * @return {String} 加密后字符串
 */
export default function md5Encrypt (str) {
  try {      
    var newStr = crypto.createHash('md5').update(str).digest('hex')
    return newStr
  } catch (e) {
    return str
  }
}