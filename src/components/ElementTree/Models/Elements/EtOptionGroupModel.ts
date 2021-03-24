import { ElementType } from '../../Enums/ElementTypeEnum';

import { EtValueElementModel } from '../EtElementModel';
import { EtLayoutAttributesModel } from './Common/EtLayoutAttributesModel';

export class EtOptionGroupModel extends EtValueElementModel {
  attributes: EtOptionGroupAttributeModel;

  constructor(model: any = {}) {
    super(model);

    this.type = ElementType.OptionGroup;
    this.attributes = new EtOptionGroupAttributeModel(model.attributes);
  }
}

export class EtOptionGroupAttributeModel extends EtLayoutAttributesModel {
  type: 'radio' | 'checkbox' | 'toggle';
  options: string[];

  constructor(model: any = {}) {
    super(model);
    this.type = model.type || 'single';
    this.options = model.options || [];
  }
}
