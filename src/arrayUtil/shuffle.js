import isArray from '../commonUtil/isArray'
/**
 * @description 打乱顺序
 * @param {Array}  source 数组 []
 * @param {Boolean}  isClone 是否复制数组
 * @return {Array} 打乱顺序
 */
export default function shuffle (source, isClone) {
  if (!isArray(source)) {
    return source
  }
  var res = source
  if (isClone) {
    res = source.slice()
  }
  var len = res.length
  while (len) {
    var randomIndex = Math.floor(Math.random() * len--)
    var randomItem = res[randomIndex]
    res[randomIndex] = res[len]
    res[len] = randomItem
  }
  return res
}
