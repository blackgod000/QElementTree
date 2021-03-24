import { ElementType } from '../../Enums/ElementTypeEnum';

import { EtValueElementModel } from '../EtElementModel';

import { EtInputsAttributesModel } from './Common/EtInputsAttributesModel';

export class EtInputModel extends EtValueElementModel {
  attributes: EtInputAttributeModel;

  constructor(model: any = {}) {
    super(model);

    this.type = ElementType.Input;
    this.attributes = new EtInputAttributeModel(model.attributes);
  }
}

export class EtInputAttributeModel extends EtInputsAttributesModel {
  type: 'text' | 'number' | 'textarea';

  constructor(model: any = {}) {
    super(model);
    this.type = model.type || 'text';
  }
}
