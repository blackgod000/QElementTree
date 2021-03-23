import { ElementType } from '../Enums/ElementTypeEnum';
import { IEtAddElementsModel } from '../Models/EtAddElementsModel';

export function createAddElements(): IEtAddElementsModel {
  return <IEtAddElementsModel>{
    layout: [
      { type: ElementType.Row, label: 'Row', icon: 'view_stream' },
      { type: ElementType.Column, label: 'Column', icon: 'view_column' }
    ],
    inputs: [
      { type: ElementType.Input, label: 'Input', icon: 'create' },
      { type: ElementType.Select, label: 'Select', icon: 'list' },
      { type: ElementType.DateTime, label: 'Date Time', icon: 'date_range' },
      { type: ElementType.Editor, label: 'Editor', icon: 'library_books' }
    ],
    statics: [
      { type: ElementType.Paragraph, label: 'Paragraph', icon: 'text_format' }
    ]
  };
}
