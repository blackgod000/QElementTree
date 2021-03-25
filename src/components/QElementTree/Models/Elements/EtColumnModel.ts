import { EtContainerElementModel } from '../EtElementModel';
import { EtLayoutAttributesModel } from './Common/EtLayoutAttributesModel';
import { ElementType } from '../../Enums/ElementTypeEnum';

export class EtColumnModel extends EtContainerElementModel {
  constructor(model: any = {}) {
    super(model);

    this.type = ElementType.Column;
    this.attributes = new EtColumnAttributeModel(model.attributes);
  }
}

export class EtColumnAttributeModel extends EtLayoutAttributesModel {
  constructor(model: any = {}) {
    super(model);
  }
}
