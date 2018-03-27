function Watcher(vm,expr,cb){
  this.vm = vm
  this.expr = expr
  this.cb = cb
  this.value = this.get()
}
Watcher.prototype = {
  get(){
    Dep.target = this
    var value = this.vm[this.expr]
    Dep.target = null
    return value
  },
  update(){
    var value = this.get()
    this.cb.call(vm,value)
  },
  addDep(dep){
    dep.addSubs(this)
  }

}