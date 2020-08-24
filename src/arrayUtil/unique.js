import isArray from '../commonUtil/isArray'
/**
 * @description 数组去重
 * @param {Array}  source 数组 []
 * @return {Array} 去重后的数组
 */
export default function unique (source) {
  if (isArray(source)) {
    return [...new Set(source)]
  }
  return source
}
