export class BasicMapper {
  static map<S, T>(source: S, target: T): T {
    Object.keys(target).forEach((key) => {
      target[key] = source[key];
    });
    return target;
  }
}
