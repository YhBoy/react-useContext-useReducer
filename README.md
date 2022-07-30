# useContext 和 useReducer在项目中使用
# yarn install  || npm install

# 方便了解流程:
    1. 首先创建Store => Context 通过 react中的 createContext 并 暴露出去
            具体查看 Context文件
    2. 创建Store => Reducer.js用来存放修改公共状态的函数，函数的写法和我们在redux中的函数的写法一致
            具体查看 Reducer文件
    3. 在需要传值的组件导入context和reducer，一般是父组件传给子组件或者孙组件
            具体查看 List,Product,Index

    4. 最后通过Action 将 type 抽离出来
            具体查看 Action文件

    只是随手练习，亲喷。





     父组件调用子组件方法
            具体查看 Child 组件 
                照抄自这个博客地址
                        https://www.jianshu.com/p/f5a29dde775b



