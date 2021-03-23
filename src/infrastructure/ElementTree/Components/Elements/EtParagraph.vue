<template>
  <div :style="styles" :class="classes">
    {{ attributes.text }}
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { EtParagraphAttributeModel } from '../../Models/Elements/EtParagraphModel';
import { EtElementMixin } from './Common/EtElementMixin';

@Component
export default class EtParagraph extends Mixins(EtElementMixin) {
  get attributes() {
    return <EtParagraphAttributeModel>this.element.attributes;
  }

  get styles() {
    switch (this.attributes.type) {
      case 'text':
        return {};
      case 'text-box':
        return {
          'white-space': 'pre-wrap',
          'word-break': 'break-word'
        };
      default:
        throw new Error('Unknown paragraph type.');
    }
  }

  get classes() {
    return [
      this.attributes.heading,
      this.attributes.alignment,
      {
        'text-bold': this.attributes.bold,
        'text-italic': this.attributes.italic
      }
    ];
  }
}
</script>
