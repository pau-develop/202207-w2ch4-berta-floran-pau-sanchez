class SkylabArray {
  constructor(...values) {
    let i = 0;
    do {
      this[i] = values[i];
      i += 1;
    } while (values[i] !== undefined);
    this.length = i;
  }

  push(pushedObj) {
    this[this.length] = pushedObj;
    this.length += 1;
  }
}

module.exports = SkylabArray;
