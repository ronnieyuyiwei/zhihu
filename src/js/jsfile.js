/**
 * Created by YYW on 2017/3/14.
 */
function Animal (name) {
  this.name = name || 'Animal'
  this.sleep = function () {
    console.log(this.name + '正在睡觉')
  }
}
Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃' + food)
}
function Cat () {
}
Cat.prototype = new Animal()
Cat.prototype.name = 'cat'
export {Animal, Cat}
