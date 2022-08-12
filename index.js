class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>a-b)
    this.length = this.items.length
  }
  get(pos) {
    if(this.items.indexOf(pos) == -1){
      throw new Error('OutOfBounds')
    }
    else{
      return(this.items.indexOf(pos))
    }
  }
  max() {
    if(this.items.length > 0){
      return this.items[this.items.length - 1]
    }
    else{
      throw new Error('EmptySortedList')
    }
  }
  min() {
    if(this.items.length > 0){
      return this.items[0]
    }
    else{
      throw new Error('EmptySortedList')
    }
  }
  avg() {
    if(this.items.length > 0){
      let result = this.sum() / this.items.length
      return result
    }
    else{
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    if(this.items.length > 0){
      let res = this.items.reduce((s, item) => s = s + item)
      return res
    }
    else{
      return 0
    }
  }
  
};

module.exports = SortedList;