import { Vue, Component, Provide } from 'vue-property-decorator';

import { ElementBuilderModule } from '../..';

import DynamicNamespacedStore from '../Service/DynamicNamespacedStore';

@Component
export default class extends Vue {
  @Provide('store')
  private store = new DynamicNamespacedStore(this.$store);

  created() {
    if (!this.$store.hasModule(this.store.namespaceKey))
      this.$store.registerModule(this.store.namespaceKey, ElementBuilderModule);
  }

  destroyed() {
    if (this.$store.hasModule(this.store.namespaceKey))
      this.$store.unregisterModule(this.store.namespaceKey);
  }
}
