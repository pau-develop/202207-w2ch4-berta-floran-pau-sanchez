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

  filter(value) {
    const tempArray = new SkylabArray();
    let i;
    for (i = 0; i < this.length; i++) {
      if (this[i] === value) tempArray.push(this[i]);
    }
    if (tempArray.length >= 1) {
      for (let i = 0; i < tempArray.length - 1; i++) {
        tempArray[i] = tempArray[i + 1];
      }
      delete tempArray[tempArray.length - 1];
      tempArray.length -= 1;
    }
    return tempArray;
  }
}

module.exports = SkylabArray;
