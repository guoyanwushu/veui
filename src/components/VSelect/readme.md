## 下拉
### question
### 给options下拉选项定义了点击事件，但是貌似点击的时候连事件处理程序都没有进去?
* 原因是因为点击触发了input的blur，使得下拉选项的v-if为false，点击的同时下拉被销毁，对应的事件当然也没了。事件不生效可以先确认一下事件所在组件是否存在，如果组件没了，事件多半也是没了的。
### 小三角的画法
* 利用border。在width和height为0的情况下，四边border其实是由四个三角形组成的
### 几个值有点绞起了， 一个是外部传进来的组件值，可能是个id，一个是select里面的input输入框的值，这个显示的是对应选中项的文本值
### 初始选项状态， 鼠标移入状态，禁用状态
* 规则: options刚展开的时候，已选择项背景要有颜色， 然后输入移入options的时候，要实时的改变鼠标所在项的背景颜色，如果移入到禁用选项，还不能展示背景色同时要保留上一个选中项的背景色
其实hover是天生带有这种特性的，如果强行放弃这种特性用js去实现，好像就有那么点得不偿失。根据options选项是否禁用，加个标识类，然后标识类.hover { background: '#dsdsd'} 就实现了
### 多选的情况下，怎么处理呢!
* 其实还是自己想复杂了，vue本身数据双向绑定的特性就可以使得我们完全可以忽视在dom级别上的一些状态操作。任何交互都只需要关联数据的变更就行了，具体到dom上的变化不要手动根据事件去更新，要学会让数据的变化去驱动dom的变化
### 在做可搜索的功能时，生成options列表的数据都已经变化了，但是下拉列表没有刷新，还是之前的列表呢?
* 代码写错位置了，直接整个替换值是可以触发刷新的
### 之前没怎么注意的，下拉展开之后，如果点击其他地方,下拉要关闭的! 很明显点击事件是在其他地方，select要怎么去响应这个点击事件去关闭下拉呢?
* 去响应其他地方的点击事件这个思路有点问题的哈哈，其他地方的事件不一定过得来，这个注册和监听都不靠谱。其实select里面的input，在点击其他地方的时候会失焦的，完全可以利用input的失焦来判断用户当前是否操作select于否，
在focus里面展开，在blur的时候隐藏就ok了.
* 其实这个情况又有问题，因为options是单独出来的dom，并不是用的select原生的结构，点击列表项会触发blur，然后blur的回调比选择回调先执行，先一步把options列表关闭了，导致选择的回调无法执行。目前解决的办法是鼠标移入options的列表
时加个标识位，移出的时候去掉标识位，blur结合标识位来确定是否隐藏options列表