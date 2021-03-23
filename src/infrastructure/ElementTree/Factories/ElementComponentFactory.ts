import { EtElementModel } from '../Models/EtElementModel';

import { ElementType } from '../Enums/ElementTypeEnum';

import EtColumn from '../Components/Elements/EtColumn.vue';
import EtRow from '../Components/Elements/EtRow.vue';

import EtInput from '../Components/Elements/EtInput.vue';
import EtSelect from '../Components/Elements/EtSelect.vue';
import EtDateTime from '../Components/Elements/EtDateTime.vue';
import EtEditor from '../Components/Elements/EtEditor.vue';

import EtParagraph from '../Components/Elements/EtParagraph.vue';

export function createElementComponent(element: EtElementModel): any {
  if (!element) throw new Error('Missing element parameter.');

  switch (element.type) {
    case ElementType.Column:
      return EtColumn;
    case ElementType.Row:
      return EtRow;
    case ElementType.Input:
      return EtInput;
    case ElementType.Select:
      return EtSelect;
    case ElementType.DateTime:
      return EtDateTime;
    case ElementType.Editor:
      return EtEditor;
    case ElementType.Paragraph:
      return EtParagraph;
    default:
      throw new Error('Unknown element type.');
  }
}
