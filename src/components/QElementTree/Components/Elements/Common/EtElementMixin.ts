import { Vue, Component, Inject, Prop } from 'vue-property-decorator';

import DynamicNamespacedStore from '../../../Store/NamespacedStore/Service/DynamicNamespacedStore';
import { EtElementModel } from '../../../Models/EtElementModel';

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
