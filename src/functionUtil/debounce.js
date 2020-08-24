import restArguments from './restArguments'
import delay from './delay'

/**
 * @description 防抖
 * @param {Function} func 函数
 * @param {Number} wait 时间ms
 * @param {Boolean} immediate
 * @return {*} 可以.cancel()提前取消
 */
export default function debounce (func, wait, immediate) {
  var timeout, result

  var later = function (context, args) {
    timeout = null
    if (args) result = func.apply(context, args)
  }

  var debounced = restArguments(function (args) {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(later, wait)
      if (callNow) result = func.apply(this, args)
    } else {
      timeout = delay(later, wait, this, args)
    }

    return result
  })

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}
