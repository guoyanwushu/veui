## 忽略的知识点
1. animation 只能应用在块级或者行内块元素上，如果在行内元素比如i上使用animation是没有效果的
2. 涉及到旋转的transform变化一定记得设置旋转中心点，一般是元素中心 transform-origin: center center
3. 直接在组件比如`<v-button></v-button>`上 @click 监听click事件， 事实上监听的是组件内部emit出来的click事件, 如果在组件内部没有将click抛出来，那么挂在v-button上的click是监听不到的
   要么在组件内 $emit('click') 要么就在组件上 @click.native 用native表示监听原生的click事件
4. 在组件标签上如果给了属性名，没给属性值，默认就是true。 比如 `<v-button round plain></v-button>`, 等价于`<v-buttton :round="true" :plain="true">`
5. 类似于第二个元素开始有margin边距， 可以用 a + a {margin-left: 10px} 来设定, 简单高效啊。之前一直喜欢用a:not(last-child) 这样子写, 没前
   一个简洁
6. 大标题用h1,h2,h3,h4更具语义
7. 对应多状态, 比如(默认、成功、危险、警告、信息)，要注意处理好默认状态，要尽量保证其他状态和默认状态都不能互相影响
8. 关于选择器，伪类选择器是可以连写的。比如选择既不是第一个也不是最后一个的元素， a:not(:first-child):not(:last-child) {}
   这是个很实用的技巧，多注意一下
9. hsla 颜色值 hsla(色相，饱和度，亮度，不透明度), 针对不透明度说一下，有时候不透明度真的会带来视觉上的差异，特别是在宽度上，同为
   1px的宽度，0.5的透明度确实比1的透明度看起来更细一些，就很神奇
## 待学习的知识点
1. button的几种类型(默认、警告、危险、信息、成功)对应的几种状态(未点击、hover、active)的背景色和边框色怎么利用scss去设置
   > 合理利用 @mixin 和 颜色混合函数 mix 通过混合白色和黑色来区分hover和active的状态