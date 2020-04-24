// We can also extend the native implementation of Set if we wanted to do something
// like log on addition or create new methods

class MySet extends Set {
  constructor(arr) {
    // this will create the instance of Set class which is inherited
    super(arr)
    this.originalArray = arr
  }

  add(val) {
    // this will call the method of Set class which is inherited
    super.add(val)
    console.log(`added ${val} to the set!`)
  }

  toArray() {
    return Array.from(this)
  }

  reset() {
    return new MySet(this.originalArray)
  }
}

// this will run the constructor which will inturn rn Super
const s = new MySet([1,2,3,4,5])
s.add(6)
s.add(7)
console.log(s.toArray())

const reset = s.reset()
console.log(reset.toArray())
