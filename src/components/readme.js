Vue.component('Counter', {
  template: '',
  data: {

  }
})

// 单文件组件

var constructor = Vue.extend(options)
var instance = new constructor({
  el: document.createElement('div')
})

// 1.vue定义组件有哪几种方式 说一说各自的不同 有没有写过比较复杂的组件，说一下你用得比较多的技术点，在其中遇到过什么问题没有，然后说一下解决思路?

// render 函数构建

export default {
  data () {
    return {
      name: "王小锤"
    }
  },
  render (h) {
    return h('span', '你瞅啥呢')
  }
}

// 代码审查保证代码质量，即时发现bug， 对码不对人
// 1.健壮性 考虑边界或极端情况下的代码运行情况、 兼容性、可扩展性、输入非安全性
// 2.可读性 包括变量及函数命名规则统一,功能拆分，避免大段的代码，合理的注释(好的注释一定是除了代码表述之外的东西)
// 3.性能
// 4.一致及可控性 避免不安全的引入, 保持整体代码风格一致，相同功能的组件引用一致，避免重复的轮子和额外的轮子
