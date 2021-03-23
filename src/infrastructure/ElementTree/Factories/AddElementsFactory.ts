import { ElementType } from '../Enums/ElementTypeEnum';
import { IEtAddElementsModel } from '../Models/EtAddElementsModel';

export function createAddElements(): IEtAddElementsModel {
  return <IEtAddElementsModel>{
    layout: [
      { type: ElementType.Row, label: 'Row', icon: 'row' },
      { type: ElementType.Column, label: 'Column', icon: 'column' }
    ],
    inputs: [
      { type: ElementType.Input, label: 'Input', icon: 'input' },
      { type: ElementType.Select, label: 'Select', icon: 'select' },

      { type: ElementType.Editor, label: 'Editor', icon: 'editor' },
      { type: ElementType.DateTime, label: 'Date Time', icon: 'date' }
    ],
    statics: [
      { type: ElementType.Paragraph, label: 'Paragraph', icon: 'paragraph' }
    ]
  };
}
