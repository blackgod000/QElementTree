import { ElementType } from '../Enums/ElementTypeEnum';

import EtEditRow from '../Components/EditElements/EtEditRow.vue';
import EtEditColumn from '../Components/EditElements/EtEditColumn.vue';

import EtEditInput from '../Components/EditElements/EtEditInput.vue';
import EtEditSelect from '../Components/EditElements/EtEditSelect.vue';
import EtEditDateTime from '../Components/EditElements/EtEditDateTime.vue';
import EtEditEditor from '../Components/EditElements/EtEditEditor.vue';

import EtEditParagraph from '../Components/EditElements/EtEditParagraph.vue';

export function createEditElementComponent(type: ElementType): any {
  if (!type) throw new Error('Missing type parameter.');

  switch (type) {
    case ElementType.Column:
      return EtEditColumn;
    case ElementType.Row:
      return EtEditRow;
    case ElementType.Input:
      return EtEditInput;
    case ElementType.Select:
      return EtEditSelect;
    case ElementType.DateTime:
      return EtEditDateTime;
    case ElementType.Editor:
      return EtEditEditor;
    case ElementType.Paragraph:
      return EtEditParagraph;
    default:
      throw new Error('Unknown element type.');
  }
}
