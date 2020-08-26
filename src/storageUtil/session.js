import isObject from '../commonUtil/isObject'
import isEqual from '../commonUtil/isEqual'
import getValue from '../objectUtil/getValue'
import setValue from '../objectUtil/setValue'
// import { isObject, getValue, setValue, isEqual } from 'zbase-utils'
export default class SessionSto {
  // static getInstance (props) {
  //   if (!this.instance) {
  //     this.instance = new SessionSto(props)
  //   }
  //   return this.instance
  // }
  constructor (props) {
    this.instance = null
    // name-仓库名称 data-默认值
    this.config = {
      name: 'ZBASE_SESSIONSTO',
      data: null
    }
    this.dataStr = ''
    this.init(props)
  }
  init (props) {
    if (isObject(props)) {
      this.config = Object.assign({}, this.config, props)
    }
    if (this.config && this.config.name && this.config.data) {
      // 有默认数据
      var str = '{}'
      try {
        str = JSON.stringify(this.config.data)
      } catch (e) {
        str = '{}'
      }
      this.setSto(this.config.name, str)
    } else {
      // // 没有默认数据
      this.dataStr = this.getSto(this.config.name)
      // var obj = {}
      // try {
      //   obj = JSON.parse(str) || {}
      // } catch (e) {
      //   obj = {}
      // }
      // this.data = obj
      // this.set()
    }
  }
  getSto (name) {
    name = name || this.config.name
    return window.sessionStorage.getItem(name)
  }
  setSto (name, data) {
    name = name || this.config.name
    window.sessionStorage.setItem(name, data)
  }
  cleanSto () {
    window.sessionStorage.removeItem(this.config.name)
  }
  get (path) {
    var str = this.getSto() || '{}'
    var data = {}
    try {
      data = JSON.parse(str) || {}
    } catch (e) {
      data = {}
    }
    return getValue(data, path)
    // return getValue(this.data, path)
  }
  set (path, val) {
    // this.data = this.get()
    var data = this.get()
    var pathVal = getValue(data, path)
    if (isEqual(pathVal, val)) {
      // 没有变化
      return
    }
    data = setValue(data, path, val)
    var str = '{}'
    try {
      str = JSON.stringify(data)
    } catch (e) {
      str = '{}'
    }
    // 数据存储
    this.setSto(this.config.name, str)
    this.dataStr = str
  }
  del (path) {
    this.set(path)
  }
  clean () {
    this.cleanSto()
  }
}
