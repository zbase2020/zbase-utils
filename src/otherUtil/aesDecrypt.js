const crypto = require('crypto')
/**
 * @description AES对称解密
 * @param {String} str 加密字后符串
 * @param {String} key 公钥
 * @return {String} 解密后字符串
 */
export default function aesDecrypt (str, key) {
  // AES对称解密
  try {
    var decipher = crypto.createDecipher('aes192', key)
    var dec = decipher.update(str, 'hex', 'utf8')
    return (dec += decipher.final('utf8'))
  } catch (e) {
    return str
  }
}