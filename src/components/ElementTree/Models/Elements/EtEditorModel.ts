import { ElementType } from '../../Enums/ElementTypeEnum';

import { EtValueElementModel } from '../EtElementModel';

import { EtLayoutAttributesModel } from './Common/EtLayoutAttributesModel';

export class EtEditorModel extends EtValueElementModel {
  attributes: EtEditorAttributeModel;

  constructor(model: any = {}) {
    super(model);

    this.type = ElementType.Editor;
    this.attributes = new EtEditorAttributeModel(model.attributes);
  }
}

export class EtEditorAttributeModel extends EtLayoutAttributesModel {
  constructor(model: any = {}) {
    super(model);
  }
}
