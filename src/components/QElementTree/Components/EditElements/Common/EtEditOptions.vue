<template>
  <q-list bordered>
    <q-item>
      <q-item-section>
        <q-input dense label="Option" v-model="newOption" />
      </q-item-section>
      <q-item-section side>
        <q-btn
          round
          size="sm"
          color="positive"
          icon="check"
          @click="addOption"
        />
      </q-item-section>
    </q-item>
    <q-separator />
    <q-item v-for="(option, index) in attributes.options" :key="index">
      <q-item-section>
        <q-item-label>{{ option }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn
          round
          size="sm"
          color="negative"
          icon="delete"
          @click="deleteOption(option)"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import { EtEditElementMixin } from './EtEditElementMixin';

@Component
export default class EtEditOptions extends Mixins(EtEditElementMixin) {
  newOption = '';

  async addOption() {
    await this.changeAttribute('options', [
      ...this.attributes.options,
      this.newOption
    ]);

    this.newOption = '';
  }

  async deleteOption(option: string) {
    await this.changeAttribute(
      'options',
      this.attributes.options.filter((o: string) => o !== option)
    );
  }
}
</script>

<style scoped></style>
