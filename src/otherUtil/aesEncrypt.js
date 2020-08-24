const crypto = require('crypto')
/**
 * @description AES对称加密
 * @param {String} str 需加密字符串
 * @param {String} key 公钥
 * @return {String} 加密后字符串
 */
export default function aesEncrypt (str, key) {
  try {      
    str = str.toString()
    // 使用aes192加密
    var cipher = crypto.createCipher('aes192', key)
    // 编码方式从utf-8转为hex
    var enc = cipher.update(str, 'utf8', 'hex')
    // 编码方式转为hex
    return (enc += cipher.final('hex'))
  } catch (e) {
    return str
  }
}