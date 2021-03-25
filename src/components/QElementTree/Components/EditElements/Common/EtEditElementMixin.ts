import { Vue, Component, Inject } from 'vue-property-decorator';

import DynamicNamespacedStore from '../../../Store/NamespacedStore/Service/DynamicNamespacedStore';
import { EtElementModel } from '../../../Models/EtElementModel';
import { IPropertyValue } from '../../../Store/types';

@Component
export class EtEditElementMixin extends Vue {
  @Inject('store') public store!: DynamicNamespacedStore;

  get selectedElement(): EtElementModel {
    return this.store.getter('getSelectedElement');
  }

  get attributes() {
    return this.selectedElement.attributes;
  }

  async changeAttribute(property: string, newValue: any) {
    await this.store.dispatch('[ElementBuilder] Change Element Attribute', <
      IPropertyValue
    >{
      property: property,
      value: newValue
    });
  }
}
