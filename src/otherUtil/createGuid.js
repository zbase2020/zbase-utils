/**
 * @description 全局唯一标识符
 * @return {String} 全局唯一标识符
 */
export default function createGuid () {
  return 'xxxxxxxx-xxxx-9xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}