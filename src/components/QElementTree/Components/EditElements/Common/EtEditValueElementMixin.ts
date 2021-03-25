import { Vue, Component, Inject } from 'vue-property-decorator';

import DynamicNamespacedStore from '../../../Store/NamespacedStore/Service/DynamicNamespacedStore';
import { EtValueElementModel } from '../../../Models/EtElementModel';
import { IPropertyValue } from '../../../Store/types';

@Component
export class EtEditValueElementMixin extends Vue {
  @Inject('store') public store!: DynamicNamespacedStore;

  get selectedElement(): EtValueElementModel {
    return this.store.getter('getSelectedElement');
  }

  get field() {
    return this.selectedElement.field;
  }

  async changeField(newValue: any) {
    await this.store.dispatch('[ElementBuilder] Change Element Property', <
      IPropertyValue
    >{
      property: 'field',
      value: newValue
    });
  }
}
