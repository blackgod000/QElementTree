<template>
  <et-element v-if="rootElementId && elements" :elementId="rootElementId" />
</template>

<script lang="ts">
import { Vue, Component, Inject, Prop, Watch } from 'vue-property-decorator';
import EtElement from './Components/EtElement.vue';
import { IEtElementModel } from './Models/EtElementModel';
import DynamicNamespacedStore from './Store/NamespacedStore/Service/DynamicNamespacedStore';

@Component({
  components: {
    EtElement
  }
})
export default class ElementTree extends Vue {
  @Inject('store') private store!: DynamicNamespacedStore;

  @Prop({ default: false }) readonly builderMode!: boolean;
  @Prop({ required: true }) readonly rootElementId!: ElementId;
  @Prop({ required: true }) readonly elements!: IEtElementModel[];
  @Prop() readonly values: Values | undefined;

  //BuilderMode
  @Watch('builderMode', { immediate: true })
  async onBuilderModeChange(builderMode: boolean) {
    await this.store.dispatch('[ElementTree] Save BuilderMode', builderMode);
  }

  //RootElementId
  @Watch('rootElementId', { immediate: true })
  async onRootElementIdChange(rootElementId: boolean) {
    await this.store.dispatch(
      '[ElementTree] Save RootElementId',
      rootElementId
    );
  }

  //Elements
  @Watch('elements', { immediate: true })
  async onElementsChange(newElements: IEtElementModel[]) {
    await this.store.dispatch('[ElementTree] Save Elements', newElements);
  }

  //Values
  get storeValues() {
    return this.store.getter('values');
  }

  @Watch('values', { immediate: true })
  async onValuesChange(newValues: Values) {
    console.log('values', this.store);
    await this.store.dispatch('[ElementTree] Save Values', newValues);
  }

  @Watch('storeValues')
  onStoreValuesChange(storeValues: Values) {
    console.log('storeValues', storeValues);
    this.$emit('update:values', storeValues);
  }
}
</script>

<style></style>
