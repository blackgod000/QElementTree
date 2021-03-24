import { EtElementModel, IEtElementModel } from '../Models/EtElementModel';

import { ElementType } from '../Enums/ElementTypeEnum';

import { EtColumnModel } from '../Models/Elements/EtColumnModel';
import { EtRowModel } from '../Models/Elements/EtRowModel';

import { EtInputModel } from '../Models/Elements/EtInputModel';
import { EtSelectModel } from '../Models/Elements/EtSelectModel';
import { EtDateTimeModel } from '../Models/Elements/EtDateTimeModel';
import { EtEditorModel } from '../Models/Elements/EtEditorModel';

import { EtParagraphModel } from '../Models/Elements/EtParagraphModel';

export function createElementModel(model: IEtElementModel): EtElementModel {
  if (!model) throw new Error('Element model can not be null.');

  switch (model.type) {
    case ElementType.Column:
      return new EtColumnModel(model);
    case ElementType.Row:
      return new EtRowModel(model);

    case ElementType.Input:
      return new EtInputModel(model);
    case ElementType.Select:
      return new EtSelectModel(model);
    case ElementType.DateTime:
      return new EtDateTimeModel(model);
    case ElementType.Editor:
      return new EtEditorModel(model);

    case ElementType.Paragraph:
      return new EtParagraphModel(model);

    default:
      throw new Error('Unknown element type.');
  }
}
