# zbase-utils工具库

> 常用工具库

- [ ] cookie操作：cookieUtil
- [ ] storage操作  storageUtil

- [ ] 正则匹配操作 regUtil

- [x] 数组操作 arrayUtil

- [x] 字符串操作 stringUtil

- [x] 数值操作 numberUtil

- [x] 对象操作 objectUtil

- [ ] 页面操作 webUtil

- [ ] 时间操作(基于moment) dateUtil

- [ ] 循环操作 cycleUtil

- [ ] 移动端工具类 mobileUtil

- [x] 函数操作 functionUtil

- [ ] 地址栏操作 urlUtil

- [x] 其他操作  otherUtil

- [ ] 微信公众号操作  weChatUtil

- [ ] 浏览器操作 browserUtil

## Installation
```
npm i zbase-utils
```

## Usage
```js
/* 支持多种引入方式 */
// import zbseUtils from 'zbase-utils'
// import { numberUtil } from 'zbase-utils'
// numberUtil.calculate === calculate
import { calculate } from 'zbase-utils'

console.log(0.1 + 0.2)
// => 0.30000000000000004
console.log(calculate(0.1, '+', 0.2))
// => 0.3
```

