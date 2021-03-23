import { uid } from 'quasar';

export interface IEtElementModel {
  id?: ElementId;
  type: string | number;
  attributes?: { [property: string]: any };
}

export interface IEtContainerElementModel extends IEtElementModel {
  elementIds?: ElementId[];
}

export class EtElementModel {
  id: ElementId;
  type!: string | number;
  attributes: { [property: string]: any };

  constructor(model: any = {}) {
    this.id = model.id || uid();
    this.attributes = model.attributes || {};
  }
}

export class EtContainerElementModel extends EtElementModel {
  elementIds: ElementId[];

  constructor(model: any = {}) {
    super(model);

    this.elementIds = model.elementIds || [];
  }
}

export class EtValueElementModel extends EtElementModel {
  field: string;

  constructor(model: any = {}) {
    super(model);

    this.field = model.field || this.id;
  }
}
