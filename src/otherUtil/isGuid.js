/**
 * @description 判断是否是全局唯一标识符
 * @param {String} guid guid
 * @return {Boolean} 判断是否是全局唯一标识符
 */
export default function isGuid (guid) {
  var guidReg = /^[?a-z0-9]{8}-[?a-z0-9]{4}-[?a-z0-9]{4}-[?a-z0-9]{4}-[?a-z0-9]{12}$/i
  return guid && guidReg.test(guid) && true
}