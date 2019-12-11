## question
#### 正经的input组件实际上是一个div，里面包了一个真正用于输入的input，那么和input有关的focus、hover状态怎么反映到外面的容器上面去
* 第一种方案是通过事件处理手动给容器加上类
#### 长度问题，容器长度是固定呢，还是自适应呢,还有两边的icon的问题，到底怎么布局比较好?
#### div里面的icon为毛就不垂直居中
*    首先明白一点，vertical-middle 只对行内元素有效的，也就是说div用vertical-middle完全没得用, 如果需要让div里面的文字或i图标垂直居中，最好的方法就是将其line-height设置为外层div容器的高度