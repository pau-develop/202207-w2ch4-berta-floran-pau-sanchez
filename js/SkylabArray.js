class SkylabArray {
  constructor(...values) {
    let i = 0;
    do {
      this[i] = values[i];
      i += 1;
    } while (values[i] !== undefined);
  }
}

export default SkylabArray;
