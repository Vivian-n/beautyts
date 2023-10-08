"use strict";
/*
 * @FilePath: index.ts
 * @Author: Vivian L_qirui@163.com
 * @Date: 2023-10-07 09:39:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-07 10:04:57
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
/**
 * 类型的注释
 * 显示类型定义：手动置顶变量类型
 * 类型的推断：通过复制让ts对变量进行类型推断
 * 隐式的any：如果没有定义类型，且无法进行类型推断，且非严格模式，那么隐式注解为any
 * */
// 显示类型定义
// let a: number = 1
// 类型推断
// let a = 1;
// a = 'abc'
// 隐式any类型
// function plus(a,b) {
//   return a+b;
// }
// tsconfig.json中"strict": true,就是严格模式，如果变成false就可以
/**
 * noImplicitAny没有隐式的any,tsconfig.json中的各种严格模式类型打开关闭是不好的。
 * */
// any：一个叫任意的类型
/**
 * 可以使ts代码退回到js代码编写的方案，不存在任何静态类型检查
 * */
// 1.any类型的数据可以赋值给任何类型的变量
let a;
let b = { a: 1 };
a = b;
// 2.可以任意访问对象属性
let data = { a: 1 };
console.log('data.b', data.b);
// 3.可以给对象进行属性的追加
let d3 = { a: 1 };
d3.b = 1;
// 4.可以any类型的变量可以被任何类型的变量赋值
let a4;
let b4 = 1;
a4 = b4;
// 5.隐式的any在严格模式下是不被允许的
function plus5(a, b) {
    return a + b;
}
plus5(1, 2);
plus5('1', 2);
// any要慎用 不得已而为之
