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
