import { ElementType } from '../../Enums/ElementTypeEnum';

import { EtValueElementModel } from '../EtElementModel';

import { EtInputsAttributesModel } from './Common/EtInputsAttributesModel';

export class EtSelectModel extends EtValueElementModel {
  attributes: EtSelectAttributeModel;

  constructor(model: any = {}) {
    super(model);

    this.type = ElementType.Select;
    this.attributes = new EtSelectAttributeModel(model.attributes);
  }
}

export class EtSelectAttributeModel extends EtInputsAttributesModel {
  type: 'single' | 'multiple';
  options: string[];

  constructor(model: any = {}) {
    super(model);
    this.type = model.type || 'single';
    this.options = model.options || [];
  }
}
