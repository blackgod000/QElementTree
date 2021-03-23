import { ElementType } from '../../Enums/ElementTypeEnum';

import { EtElementModel } from '../EtElementModel';
import { EtLayoutAttributesModel } from './Common/EtLayoutAttributesModel';

export class EtParagraphModel extends EtElementModel {
  attributes: EtParagraphAttributeModel;

  constructor(model: any = {}) {
    super(model);

    this.type = ElementType.Paragraph;
    this.attributes = new EtParagraphAttributeModel(model.attributes);
  }
}

export class EtParagraphAttributeModel extends EtLayoutAttributesModel {
  type: 'text' | 'text-box';
  text: string;
  heading: string;
  alignment: string;
  bold: boolean;
  italic: boolean;

  constructor(model: any = {}) {
    super(model);
    this.type = model.type || 'text';
    this.text = model.text || 'Paragraph *';
    this.heading = model.heading || null;
    this.alignment = model.alignment || 'text-left';
    this.bold = model.bold || false;
    this.italic = model.italic || false;
  }
}
