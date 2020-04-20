### radio
1. 重写选中与未选中状态的样式
2. 怎么去实现同一组的radio的互斥选中关系呢
3. 针对radio 和 checkbox的 选中状态和value的属性没怎么搞懂!
   首先, 搞清楚一点, radio作为一个输入input来说， 取值取的是他的value属性， 不管这个单选框是否选中， 他的value始终就是初始化那个值。v-model的时候， 同步的也是这个value属性值，当
   v-model变量等于value属性的时候，单选框就是选中状态，当v-model不等于value属性值的时候，单选框就是未选中状态。当有多个单选框的值的时候，如果用同一个变量进行v-model绑定，那么这个
   变量的值就是选中的那个radio的value属性，初始化也是一样的道理。
4. radio本身的v-model就实现了 同一个v-model的所有radio状态同步问题， 这个应该是vue内部的机制实现的。 然后要二次封装， 还要继续维护这种同步关系就要稍微考虑一下
5. 组件的v-model实际上是v-bind:value v-on:input 的语法糖， 所以组件里一定要有value的prop属性，不然value落不下去。然后更新的时候，一定要 $emit('input', newValue)