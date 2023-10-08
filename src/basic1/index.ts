/*
 * @FilePath: index.ts
 * @Author: Vivian L_qirui@163.com
 * @Date: 2023-09-25 10:37:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-07 09:35:52
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion: 
 */
/**
 * ts js的超集
 * 基于ECMSScript的语言规范
 * 2012微软推出的开源项目
 * 框架、商用项目、一切使用js开发的业务
 * 在ECMAScript的基础上扩展了静态类型和完善了面向对象编程
 * ES3<ES5<ES6<...<TS
 * 
 * 
 * TS在js基础上建立了运行前类型检查机制 
 * ts有ts代码编译器
 * 编写ts代码
 * 检查ts代码类型（静态类型检查）
 * 编译ts（js）
 * 运行js代码（js运行环境）
 * 
 * 静态类型检查：在代码运行前检查所有的类型相关错误
 * 
 * */
/**
 * ECMA：欧洲计算机制造协会
 * ECMAScript: 基于ECMA262文件（脚本规范语言）的一门语言
 * es3,5,6:是ECMAScript的迭代版本
 * ts：基于ECMAScript语言 进一步扩展的产物
 * js泛指ECMA语言 应是一门技术
 * 
 * 内容
 * 类型相关、函数、枚举、接口、类、模块、声明、命名空间、装饰器
 * 
 * 为什么需要ts？
 * 
 * 类型：是对对象使用的约束
 * 一个属性到底存不存在在js中运行前不能准确得知 可能未知
 * 一个函数对参数传递约定 
 * js中极有可能很难判定函数正常工作的参数条件
 * 这些未知的信息可能产生的情况导致对对象的使用者有很多不必要花费的使用成本
 * 以及对项目维护代码分析的成本
 * 
 * TS的存在动态指定了一个更明确的对对象的使用规范
 * 类型定义和严格的的约束是一个复杂或大型项目维护的基础条件
 * */  
type TypeObj = {
  a:number,
  b:number,
  c:string,
}
const obj:TypeObj = {
  a:1,
  b:2,
  c:''
}

// code runner
// console.log('object.c', object.c)

