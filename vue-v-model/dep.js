function Dep(){
  this.subs = []
}
Dep.prototype = {
  addSubs(sub){
    this.subs.push(sub)
  },
  notify(){
    this.subs.forEach(sub => {
      sub.update()
    })
  },
  depend(dep){
    Dep.target.addDep(dep)
  }
}