## 忽略的知识点
1. animation 只能应用在块级或者行内块元素上，如果在行内元素比如i上使用animation是没有效果的
2. 涉及到旋转的transform变化一定记得设置旋转中心点，一般是元素中心 transform-origin: center center
3. 直接在组件比如`<v-button></v-button>`上 @click 监听click事件， 事实上监听的是组件内部emit出来的click事件, 如果在组件内部没有将click抛出来，那么挂在v-button上的click是监听不到的
   要么在组件内 $emit('click') 要么就在组件上 @click.native 用native表示监听原生的click事件

## 待学习的知识点
1. button的几种类型(默认、警告、危险、信息、成功)对应的几种状态(未点击、hover、active)的背景色和边框色怎么利用scss去设置
   > 合理利用 @mixin 和 颜色混合函数 mix 通过混合白色和黑色来区分hover和active的状态