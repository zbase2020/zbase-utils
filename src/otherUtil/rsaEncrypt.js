const JSEncrypt = require('../../lib/jsencrypt/jsencrypt')
/**
 * @description rsa非对称加密
 * @param {String} str 需加密字符串
 * @param {String} key 公钥
 * @return {String} 加密后字符串
 */
export default function rsaEncrypt (str, key) {
  try {
    var jse = new JSEncrypt()
    jse.setPublicKey(key)
    return jse.encrypt(str)
  } catch (e) {
    return str
  }
}