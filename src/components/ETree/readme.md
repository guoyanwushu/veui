1. checkbox
2. icon (展开与收缩) 按钮点击事件要加stop修饰符禁止冒泡，否则会冒泡到label上，再触发一次label的click
   事件，就会影响到展开和收缩的功能
3. tree-node 本身是一个嵌套自身的组件，怎么把tree-node的事件抛到e-tree上面去
    利用dispatch， 一级一级找， 直到找到Tree组件， 然后在Tree上emit事件

