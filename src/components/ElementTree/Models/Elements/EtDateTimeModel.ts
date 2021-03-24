import { ElementType } from '../../Enums/ElementTypeEnum';

import { EtValueElementModel } from '../EtElementModel';

import { EtInputsAttributesModel } from './Common/EtInputsAttributesModel';

export class EtDateTimeModel extends EtValueElementModel {
  attributes: EtEtDateTimeModelAttributeModel;

  constructor(model: any = {}) {
    super(model);

    this.type = ElementType.DateTime;
    this.attributes = new EtEtDateTimeModelAttributeModel(model.attributes);
  }
}

export class EtEtDateTimeModelAttributeModel extends EtInputsAttributesModel {
  constructor(model: any = {}) {
    super(model);
  }
}
