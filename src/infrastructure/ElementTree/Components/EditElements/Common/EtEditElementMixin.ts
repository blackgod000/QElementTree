import { Vue, Component, Inject } from 'vue-property-decorator';

import DynamicNamespacedStore from 'src/infrastructure/ElementTree/Store/NamespacedStore/Service/DynamicNamespacedStore';
import { EtElementModel } from 'src/infrastructure/ElementTree/Models/EtElementModel';
import { IPropertyValue } from 'src/infrastructure/ElementTree/Store/types';

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
