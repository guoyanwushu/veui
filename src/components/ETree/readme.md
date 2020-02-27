<!--
1. checkbox
2. icon (展开与收缩) 按钮点击事件要加stop修饰符禁止冒泡，否则会冒泡到label上，再触发一次label的click
   事件，就会影响到展开和收缩的功能
3. tree-node 本身是一个嵌套自身的组件，怎么把tree-node的事件抛到e-tree上面去
    利用dispatch， 一级一级找， 直到找到Tree组件， 然后在Tree上emit事件

 数据驱动, 样式需要哪些数据来驱动

 [{
    id: '1',
    nodeName: '根节点',
    checked: true,

    children: [{
        id: '2',
        nodeName: '子节点1'
    }]
 }]

 组件的状态\行为

 1. 展开   与是否有子节点相关联
 2. 折叠   通过控制children的显示与隐藏实现
 3. 选中   前提是有复选框, 要和node节点的checked属性建立双向的对应关系, 父级节点选中与否会同步所有子级节点，子节点也会同步父节点的状态, 三个状态变化
 4. 懒加载
 5. 禁用   针对复选框的禁用
 6. 设置状态 由数据动态同步状态

数据始终是自身持有还是继承自父节点
checked 是否折叠的属性是用户并不关心的属性，这个应该落到节点自身上 禁用也应该由父节点传下去。 另外还有一些初始化配置属性, 比如初始化展开 ,初始化关闭. 这些东西可能在初始化由根落到每一节点上， 用 provide 注入到全组件比较好


now + children(now + children(now + children(now + children)))

:checked 传给后代 ， emit传给上级, 遍历 $children， 确定是否























 -->


