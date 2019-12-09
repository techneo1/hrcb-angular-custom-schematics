export interface <%= classify(name) %>Dto {}

export class <%= classify(name) %> {
  constructor(properties?: Partial<<%= classify(name) %>>) {
    Object.assign(this, properties);
  }
}
