import isNumber from '../commonUtil/isNumber'
/**
 * @description 数字转英文金额
 * @param {Number}  amount 数字
 * @param {Number}  decimals 保留几位小数
 * @param {String}  decPoint 小数点符号
 * @param {String}  thousandsSep 千分位符号
 * @return {String} 英文金额
 */
export default function numberFormatMoney (number, decimals, decPoint, thousandsSep) {
  if (!isNumber(number)) {
    console.error('传入参数不是数字')
    return number
  }
  if (decimals === undefined || decimals === '' || decimals === null) {
    decimals = (number.toString() && number.toString().split('.') && number.toString().split('.')[1] && number.toString().split('.')[1].length) || 0
  }
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number
  let prec = !isFinite(+decimals) ? 0 : (Math.abs(decimals))
  let sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep
  let dec = typeof decPoint === 'undefined' ? '.' : decPoint
  let s = ''
  function toFixedFix (n, prec) {
    // var k = Math.pow(10, prec)
    // return '' + Math.floor(n * k) / k
    return n.toFixed(prec)
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.floor(n)).split('.')
  var re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
