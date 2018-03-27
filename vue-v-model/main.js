function Vue(options){
  this.data = options.data
  var element = document.querySelector(options.el)
  Observer(this.data,this)
  var frag = nodeToFragment(element,this)
  element.appendChild(frag)
}
function nodeToFragment(node,vm){
  var fragment = document.createDocumentFragment()
  var child 
  while(child = node.firstChild){
    compile(child,vm)
    fragment.appendChild(child)
  }
  return fragment
}
var vm = new Vue({
  el:'#app',
  data:{
    syc:'test'
  }
})