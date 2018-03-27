function compile(node,vm){
  if(node.nodeType === 1){
    var attrs = node.attributes
    for(let i = 0; i < attrs.length; i++){
      if(attrs[i].nodeName === 'v-model'){
        var name = attrs[i].nodeValue
        node.value = vm[name]
        node.addEventListener('input',(e)=>{
          vm[name] = e.target.value
        })
        new Watcher(vm,name,(val)=>{
          node.value = val
        })
      }
    }
  }
  if(node.nodeType === 3){
    var reg = /\{\{(.*)\}\}/
    if(reg.test(node.nodeValue)){
      var name = RegExp.$1
      node.nodeValue = vm[name]
      new Watcher(vm,name,(val)=>{
        node.nodeValue = val
      })
    }
  }
}