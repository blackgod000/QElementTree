export class EtLayoutAttributesModel {
  flexSize: number;

  constructor(model: any = {}) {
    this.flexSize = model.flexSize || 1;
  }
}
