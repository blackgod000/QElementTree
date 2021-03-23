import { Component, Mixins } from 'vue-property-decorator';

import { EtValueElementModel } from 'src/infrastructure/ElementTree/Models/EtElementModel';
import { EtElementMixin } from './EtElementMixin';
import { IFieldValue } from 'src/infrastructure/ElementTree/Store/types';

@Component
export class EtElementValueMixin extends Mixins(EtElementMixin) {
  get element(): EtValueElementModel {
    return this.store.getter('getElementById')(this.elementId);
  }

  get field(): string {
    return this.element.field;
  }

  get value(): any {
    return this.store.getter('getElementValue')(this.field);
  }

  async changeValue(newValue: any) {
    console.log(newValue);
    await this.store.dispatch('[ElementTree] Change Value', <IFieldValue>{
      field: this.field,
      value: newValue
    });
  }
}
