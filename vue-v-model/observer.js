function Observer(data,vm){
  Object.keys(data).forEach(key=>{
    defineReactive(vm,key,data[key])
  })
}
function defineReactive(Obj,key,val){
  var dep = new Dep()
  Object.defineProperty(Obj,key,{
    get:function(){
      if(Dep.target){
        dep.depend(dep)
      }
      return val
    },
    set:function(newVal){
      val = newVal
      dep.notify()
    }
  })
}