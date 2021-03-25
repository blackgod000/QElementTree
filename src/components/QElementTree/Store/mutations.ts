import Vue from 'vue';
import { MutationTree } from 'vuex';

import { ElementBuilderState } from './state';
import {
  EtContainerElementModel,
  EtElementModel,
  IEtElementModel
} from '../Models/EtElementModel';
import { createElementModel } from '../Factories/ElementModelFactory';
import {
  ISaveElementAttributePayload,
  IDragRemovePayload,
  IDropInsertPayload,
  IDropReorderPayload,
  ISaveElementPropertyPayload,
  IFieldValue
} from './types';

export const mutations: MutationTree<ElementBuilderState> = {
  SaveBuilderMode(state, builderMode: boolean) {
    state.builderMode = builderMode;
  },
  SaveRootElementId(state, rootElementId: ElementId) {
    state.rootElementId = rootElementId;
  },
  SaveElements(state, elements: IEtElementModel[]) {
    const copiedElements: any[] = JSON.parse(JSON.stringify(elements));

    state.normalizedElements = copiedElements.reduce<any>(
      (normalizedElements, arrayElement) => {
        const element = createElementModel(arrayElement);

        normalizedElements[element.id.toString()] = element;

        return normalizedElements;
      },
      {}
    );
  },
  SaveValues(state, values: Values) {
    state.values = values;
  },
  SaveElementValue(state, { field, value }: IFieldValue) {
    state.values = {
      ...state.values,
      [field]: value
    };
  },
  SaveSelectedElement(state, elementId: ElementId) {
    state.selectedElementId = elementId;
  },
  ClearSelectedElement(state) {
    state.selectedElementId = null;
  },
  SaveElement(state, element: EtElementModel) {
    Vue.set(state.normalizedElements, element.id, {
      ...element
    });
  },
  DeleteElement(state, elementId: ElementId) {
    Vue.delete(state.normalizedElements, elementId);
  },
  SaveElementProperty(
    state,
    { elementId, property, value }: ISaveElementPropertyPayload
  ) {
    const selectedElement = state.normalizedElements[elementId];

    Vue.set(selectedElement, property, value);
  },
  SaveElementAttribute(
    state,
    { elementId, property, value }: ISaveElementAttributePayload
  ) {
    const selectedElement = state.normalizedElements[elementId];

    Vue.set(selectedElement, 'attributes', {
      ...selectedElement.attributes,
      [property]: value
    });
  },
  InsertToParentElements(
    state,
    { parentId, elementId, dropEvent }: IDropInsertPayload
  ) {
    const parentElement = <EtContainerElementModel>(
      state.normalizedElements[parentId]
    );

    parentElement.elementIds.splice(dropEvent.index, 0, elementId);
  },
  ReorderParentElements(state, { parentId, dropEvent }: IDropReorderPayload) {
    const parentElement = <EtContainerElementModel>(
      state.normalizedElements[parentId]
    );

    dropEvent.apply(parentElement.elementIds);
  },
  RemoveFromParentElements(state, { parentId, elementId }: IDragRemovePayload) {
    console.log('mut parent1', parentId, state.normalizedElements);

    const parentElement = <EtContainerElementModel>(
      state.normalizedElements[parentId]
    );

    console.log('mut parent2', parentElement);

    const indexElement = parentElement.elementIds.indexOf(elementId);

    parentElement.elementIds.splice(indexElement, 1);
  }
};
