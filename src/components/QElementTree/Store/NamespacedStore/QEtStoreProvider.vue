<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import ProvideNamespacedStore from './Mixins/ProvideNamespacedStore';

@Component
export default class QEtStoreProvider extends Mixins(ProvideNamespacedStore) {
  render(): any {
    if (!this.$slots || Object.keys(this.$slots).length === 0) {
      throw Error('Provide QElementTree component as slot.');
    }

    return this.$slots.default;
  }
}
</script>
