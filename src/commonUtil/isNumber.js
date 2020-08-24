  /**
   * @description 判断元素是否为数字
   * @param {*} source
   * @return {Boolen}
   */
  export default function isNumber (source) {
    return (typeof source === 'number') && !isNaN(source) && isFinite(source)
  }