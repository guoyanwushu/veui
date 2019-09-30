import MessageBox from './MessageBox'
import Vue from 'vue'
var MessageBoxConstructor = Vue.extend(MessageBox)

function messageBox (options) {
  var instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
  for (var item in options) {
    if (options.hasOwnProperty(item)) {
      instance[item] = options[item]
    }
  }
  console.log(instance)
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.visible = true
  })
}
export default messageBox
