let i = 0;
class SkylabArray {
  constructor(...values) {
    do {
      this[i] = values[i];
      i += 1;
    } while (values[i] !== undefined);
  }
}

export default SkylabArray;
