class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.Comparator = function(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  add(element) {
    // your implementation
    this.arr[this.arr.length] = element;
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    var swap;
    if ((this.arr.length >= indices.length) && (this.arr.length > 1) && (indices.length > 1)) {
      for (var i = 0; i < indices.length - 1; i++) {
        for (var j = 1; j < indices.length; j++) {
          if (this.Comparator(indices[i], indices[j]) == -1) {
            if (this.arr[indices[j]] <= this.arr[indices[i]]) {
              swap = this.arr[indices[i]];
              this.arr[indices[i]] = this.arr[indices[j]];
              this.arr[indices[j]] = swap;
            }
          } else {
            if (this.arr[indices[j]] >= this.arr[indices[i]]) {
              swap = this.arr[indices[i]];
              this.arr[indices[i]] = this.arr[indices[j]];
              this.arr[indices[j]] = swap;
            }
          }
        }
      }
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.Comparator = compareFunction;
  }
}

module.exports = Sorter;