let i = 0;
class SkylabArray {
  constructor(...values) {
    do {
      this[i] = values[i];
      i += 1;
    } while (values[i] !== undefined);
  }

  // length() {
  //   i = 0;
  //   do {
  //     this[i] = this.values[i];
  //     i += 1;
  //   } while (this.values[i] !== undefined);
  //   console.log(i);
  // }
}

module.exports = SkylabArray;
