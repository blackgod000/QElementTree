import { Vue, Component, Inject, Prop } from 'vue-property-decorator';

import DynamicNamespacedStore from 'src/infrastructure/ElementTree/Store/NamespacedStore/Service/DynamicNamespacedStore';
import { EtElementModel } from 'src/infrastructure/ElementTree/Models/EtElementModel';

@Component
export class EtElementMixin extends Vue {
  @Inject('store') public store!: DynamicNamespacedStore;

  @Prop()
  readonly elementId!: ElementId;

  get isBuilderMode(): boolean {
    return this.store.getter('isBuilderMode');
  }

  get element(): EtElementModel {
    return this.store.getter('getElementById')(this.elementId);
  }
}
