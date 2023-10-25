---
title: 01-JavaScript基础
icon: zidingyizhangjie
---


## 1. JavaScript的基本类型有哪些？引用类型有哪些？null和undefined的区别？

- 基本类型：String、Number、Boolean、Null、Undefined
- 引用类型：Array、Function、Object

区别：
null表示将要用来保存对象，还没有真正保存对象的值，null表示一个空指针
undefined表示，已经声明，但是没有赋值。

```js
null==undefined // true
null === undefined  // false
```

## 2. 如何判断 JavaScript 的数据类型?

typeof ==> typeof 变量名

```js
console.log(typeof 1)   //number
console.log(typeof 'a') //string
console.log(typeof null)    //object    (这是一个typeof操作符的缺陷)
console.log(typeof true)    //boolean
console.log(typeof function () {})  //function
console.log(typeof {})  //object
console.log(typeof [])  //object
console.log(typeof undefined)   //undefined
```

typeof不能识别null   可以使用 === 来确实是否是null类型 或者使用Object.prototype.toString.call()

```js
const a = null
console.log(typeof a)   // object
console.log(a === null) // true
console.log(a === Object)   // false

console.log(Object.prototype.toString.call(a))  // [object Null]
```

instanceof ==> 变量名 instanceof 数据类型
检查一个对象是否是指定数据类型的实例。通常用于检查自定义的构造函数创建的对象的类型。

```js
const array = [1]
console.log(array instanceof Array) // true
function Person(name) {
  this.name = name
}
const person = new Person('shan')
console.log(person instanceof Person)   // true
```

Object.prototype.toString.call()

```js
console.log(Object.prototype.toString.call(1))  // [object Number]
console.log(Object.prototype.toString.call('a'))    // [object String]
console.log(Object.prototype.toString.call(null))   // [object Null]
console.log(Object.prototype.toString.call(true))   // [object Boolean]
console.log(Object.prototype.toString.call(function () {}))     // [object Function]
console.log(Object.prototype.toString.call({}))     // [object Object]
console.log(Object.prototype.toString.call([]))     // [object Array]
console.log(Object.prototype.toString.call(undefined))  // [object Undefined]
```

typeof和Array.isArray()来判断数组

```js
console.log(Array.isArray([]))  // true
```

使用typeof和isNaN()来判断数字

```js
const a = NaN
console.log(typeof a)   // number
console.log(isNaN(a))   // true
```

## 3. 简述创建函数的几种方式?

```js
// 1.函数声明
function f1() {}
// 2函数表达式
const f2 = function (a, b) {
  return a + b
}
// 3.箭头函数
const f3 = (a, b) => a + b
// 4.构造函数
function F4(name, age) {
  this.name = name
  this.age = age
}
const f4 = new F4('shan', 18)
```

## 4. Javascript 创建对象的几种方式?

```js
// 1.对象字面量
const a = {}
// 2.构造函数

function Person(name, age) {
  this.name = name
  this.age = age
}
var person1 = new Person('John', 30)
// 3.Object.create() 方法
var personPrototype = {
  greet: function () {
    return `Hello, ${this.name}!`
  }
}

var person = Object.create(personPrototype)
person.name = 'John'
// 4.工厂函数
function createPerson(name, age) {
  return {
    name: name,
    age: age
  }
}

var person1 = createPerson('John', 30)
var person2 = createPerson('Alice', 25)
// 5.es6类
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return `Hello, ${this.name}!`
  }
}

var person1 = new Person('John', 30)
```

## 5. 请指出 JavaScript 宿主对象和原生对象的区别?

- 宿主对象就是宿主环境（浏览器、node）所提供的对象，不属于ES标准。
  如windows、global、XmlHttpRequest
- 原生对象就是ES规定的对象。
  如：Number、Array、String、Object、Function等

## 6. JavaScript 内置的常用对象有哪些?并列举该对象常用的方法?

- 对象及方法：
Arguments 函数参数合集
Arguments[] 函数参数数组
Arguments.length 传递给函数参数的个数

- Array数组
length  获取数组长度
toString  转换位字符串
join 将数组转换为字符串  返回一个字符串
reverse 翻转数组倒序排列
shift 删除数组第一个元素，并返回删除的元素，长度-1
pop 删除最后一个元素，返回删除的元素并将长度-1
delete 运算符只能删除数组元素的值，但数组仍然保持了相同的长度，并且删除的元素位置被设置为 undefined。
unshift 在数组最前面插入元素 长度改变
push 在数组最后面插入元素  长度改变
concat 连接数组
slice 只传递一个参数 startIndex 时，slice() 方法从索引 startIndex 开始，截取到数组的末尾，并返回一个新的数组。原数组不会被修改。
传递两个参数时，第一个参数为截取的位置，第二个参数为截取到的位置-1  返回一个新数组，原数组不被修改
sort 对数组进行排序
splice  对数组进行添加、删除和替换操作
第一个参数为从索引号删除，第二个为删除几个，第三个为添加的元素
forEach 遍历数组的每一项,不会创建新数组，而是用于在原始数组上执行操作

- String 字符串对象
toLowerCase  全部转换为小写
toUpperCase  全部转换为大写
length    字符串长度
charAt(index)  返回制定下标位置的一个字符串，如果没找到返回空字符串
subString(startIndex,endIndex)   不会修改原始字符串，而是返回一个新的子字符串
split   转换为数组
charCodeAt(index)    返回索引对应字符串的代码
concat  连接字符串
indexOf    返回查找字符串的下标，没有找到会返回-1
lastIndexOf    从后往前查找字符串
slice  提取子字符串，并返回一个新的字符串，而不修改原始字符串

- Boolean 布尔对象
Boolean.toString  将布尔值转换成字符串

- 日期对象
创建当前(现在)日期对象的实例，不带任何参数
const today = new Date()

## 7. === 和 ==的区别?

=== 既判断类型又判断值是否相等
==只判断值是否相等，不同类型会转换成同一类型再比较

## 8. null，undefined 的区别

null是准备存储但还没有存储，占位   空值
undefined  是声明了但是没有赋值

## 9. JavaScript 中什么情况下会返回 undefined 值?

- 访问声明的变量，但是没有赋值
- 访问不存在的属性
- 访问函数的参数没有显示传递值
- 访问设为undefined类型的变量
- 访问没有定义return的函数
- 访问函数return没有返回任何内容

10. 如何区分数组和对象?
Array.isArray()
Object.prototype.toString.call()
constructor
instanceof

11. 多维数组降维的几种方法

```js
const arr = [[222, 333, 444],[55, 66, 77, 88]]
// 1.转字符串转数组
console.log(arr.toString().split(','))  // ['222', '333', '444', '55', '66', '77', '88']

console.log((arr += '').split(','))  // ['222', '333', '444', '55', '66', '77', '88']
// 2.递归
let res = []
function deGui(arr) {
  let arrForeach = function (arr) {
    arr.forEach(element => {
      element instanceof Array ? arrForeach(element) : res.push(element)
    })
  }
  arrForeach(arr)
  return res
}
deGui(arr)
console.log(res)    // // ['222', '333', '444', '55', '66', '77', '88']

3.
```

## 12. 怎么判断两个对象相等?

```js
let obj1 = {
  a: 1,
  b: { c: 2 }
}
let obj2 = {
  b: {
    c: 3
  },
  a: 1
}
console.log(Object.keys(obj1))
function deepEqual(o1, o2) {
  // 判断内存地址是否一致   一致返回true
  if (o1 === o2) return console.log(true)
  // 如果其中一个不是对象，它们不是深相等的
  if (typeof o1 !== 'object' || typeof o2 !== 'object') {
    return false
  }
  // 获取两个对象的属性列表
  let keys1 = Object.keys(o1)
  let keys2 = Object.keys(o2)
  //   如果两个对象的属性名数量不等，返回false
  if (keys1.length !== keys2.length) {
    return console.log(false)
  }
  // 遍历对象的属性键
  for (const key of keys1) {
    // 递归比较属性值，如果不相等，对象不是深相等的
    if (!deepEqual(o1[key], o2[key])) {
      return false
    }
  }
  // 如果上述条件都不满足，对象是深相等的
  return true
}
deepEqual(obj1, obj2)
```

## 13. 列举三种强制类型转换和两种隐式类型转换?

toString()、String()
Number()、parseInt()、parseFloat()
Boolean()
隐士转换：字符串拼接  +-*/ % ==

## 14. JavaScript 中怎么获取当前日期的月份?

```js
// 获取完整的日期(默认格式):
var date = new Date() // Sat Jul 06 2019 19:59:27 GMT+0800 (中国标准时间) 获取当前年份:
var year = date.getFullYear() // 2019
获取当前月份: var month = date.getMonth() + 1 // 7
获取当前日: var day = date.getDay() // 6
// 获取当前日期(年-月-日):
month = month > 9 ? month : '0' + month
day = day < 10 ? '0' + day : day
var today = year + '-' + month + '-' + day //
另外的一些操作: date.getYear() // 获取当前年份(2 位)
date.getFullYear() // 获取完整的年份(4 位, 1970-????)
date.getMonth() // 获取当前月份(0-11,0 代表 1 月)
date.getDate() // 获取当前日(1-31)
date.getDay() // 获取当前星期 X(0-6,0 代表星期天)
date.getTime() // 获取当前时间(从 1970.1.1 开始的毫秒数) date.getHours(); // 获取当前小时数(0-23)
date.getMinutes() // 获取当前分钟数(0-59)
date.getSeconds() // 获取当前秒数(0-59)
date.getMilliseconds() // 获取当前毫秒数(0-999)
date.toLocaleDateString() // 获取当前日期
date.toLocaleTimeString() // 获取当前时间
date.toLocaleString() // 获取日期与时间
```

## 15. 什么是类数组(伪数组)，如何将其转化为真实的数组?

1. 具有length属性
2. 按索引方式存储数据
3. 不具有数组的push pop等方法
常见的类数组有函数的Arguments对象，DOM元素集合等。
将类数组转换为真正的数组有以下几种方法：
1. Array.from()
2. Array.prototype.slice.call()

## 16. 如何遍历对象的属性?

1. Object.keys()
2. for in
3. 遍历

## 17. 如何使用原生 JavaScript 给一个按钮绑定两个 onclick 事件?

```js
const btn = document.querySelector('button')
btn.addEventListener('click', function () {
  alert(1)
})
btn.addEventListener('click', function () {
  alert(2)
})
```

## 18. JavaScript 中的作用域、预解析与变量声明提升?

- 作用域

1. 全局作用域：在最顶层定义的变量，对于任何内部函数来说，都是可以访问的
2. 局部作用域，比如函数内部定义的变量，函数外是访问不到的
3. 块级作用域，花括号包裹的区域

## 19. 变量提升与函数提升的区别?

20. 什么是作用域链?

## 21. 如何延长作用域链?

## 22. 判断一个值是什么类型有哪些方法?

## 23. 如何实现数组的随机排序?

## 24. src 和 href 的区别是?
