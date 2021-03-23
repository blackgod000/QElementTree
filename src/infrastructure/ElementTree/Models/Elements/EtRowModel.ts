import { ElementType } from '../../Enums/ElementTypeEnum';

import { EtContainerElementModel } from '../EtElementModel';

import { EtLayoutAttributesModel } from './Common/EtLayoutAttributesModel';

export class EtRowModel extends EtContainerElementModel {
  constructor(model: any = {}) {
    super(model);

    this.type = ElementType.Row;
    this.attributes = new EtRowAttributeModel(model.attributes);
  }
}

export class EtRowAttributeModel extends EtLayoutAttributesModel {
  backgroundColor: string;

  constructor(model: any = {}) {
    super(model);
    this.backgroundColor = model.backgroundColor || null;
  }
}
