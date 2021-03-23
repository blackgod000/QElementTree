<template>
  <div>
    <div class="q-pa-sm">
      <div class="text-h7 text-uppercase text-center">Input</div>
    </div>
    <q-separator size="2px" />
    <q-list bordered>
      <q-expansion-item
        class="bg-grey-3"
        icon="grid_view"
        label="General"
        expand-separator
        default-opened
        dense
      >
        <div class="q-pa-sm bg-white">
          <div class="q-gutter-sm">
            <div class="row">
              <div class="col">
                <q-radio
                  dense
                  label="Text"
                  val="text"
                  :value="attributes.type"
                  @input="changeAttribute('type', $event)"
                />
              </div>
              <div class="col">
                <q-radio
                  dense
                  label="Text box"
                  val="text-box"
                  :value="attributes.type"
                  @input="changeAttribute('type', $event)"
                />
              </div>
            </div>
            <q-input
              label="Text"
              type="textarea"
              debounce="100"
              dense
              :value="attributes.text"
              @input="changeAttribute('text', $event)"
            />
            <q-select
              label="Heading"
              dense
              clearable
              emit-value
              map-options
              option-value="id"
              :options="headings"
              :value="attributes.heading"
              @input="changeAttribute('heading', $event)"
            />

            <div class="bg-grey-2 q-pa-sm rounded-borders">
              Alignment:
              <q-option-group
                inline
                option-value="id"
                :options="alignments"
                :value="attributes.alignment"
                @input="changeAttribute('alignment', $event)"
              />
            </div>

            <div class="row items-baseline">
              <div class="col">
                <q-checkbox
                  dense
                  label="Bold"
                  :value="attributes.bold"
                  @input="changeAttribute('bold', $event)"
                />
              </div>
              <div class="col">
                <q-checkbox
                  dense
                  label="Italic"
                  :value="attributes.italic"
                  @input="changeAttribute('italic', $event)"
                />
              </div>
            </div>
          </div>
        </div>
      </q-expansion-item>
      <q-expansion-item
        class="bg-grey-3"
        expand-separator
        icon="create"
        label="Layout"
        dense
      >
        <div class="q-pa-sm bg-white">
          <et-edit-layout />
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import EtEditLayout from './Common/EtEditLayout.vue';

import { EtEditElementMixin } from './Common/EtEditElementMixin';

@Component({
  components: { EtEditLayout }
})
export default class EtEditParagraph extends Mixins(EtEditElementMixin) {
  headings = [
    {
      id: 'text-h1',
      label: 'Headline 1'
    },
    {
      id: 'text-h2',
      label: 'Headline 2'
    },
    {
      id: 'text-h3',
      label: 'Headline 3'
    },
    {
      id: 'text-h4',
      label: 'Headline 4'
    },
    {
      id: 'text-h5',
      label: 'Headline 5'
    },
    {
      id: 'text-h6',
      label: 'Headline 6'
    },
    {
      id: 'text-subtitle1',
      label: 'Subtitle 1'
    },
    {
      id: 'text-subtitle2',
      label: 'Subtitle 2'
    },
    {
      id: 'text-body1',
      label: 'Body 1'
    },
    {
      id: 'text-body2',
      label: 'Body 2'
    },
    {
      id: 'text-caption',
      label: 'Caption'
    },
    {
      id: 'text-overline',
      label: 'Overline'
    }
  ];

  alignments = [
    {
      value: 'text-left',
      label: 'Align left'
    },
    {
      value: 'text-center',
      label: 'Align center'
    },
    {
      value: 'text-right',
      label: 'Align right'
    }
  ];
}
</script>

<style scoped></style>
