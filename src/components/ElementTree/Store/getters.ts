import { GetterTree } from 'vuex';
import { ElementBuilderState } from './state';

export const getters: GetterTree<ElementBuilderState, unknown> = {
  isBuilderMode(state): boolean {
    return state.builderMode;
  },
  isSelectedElementRoot(state): boolean {
    return state.selectedElementId === state.rootElementId;
  },
  rootElementId(state) {
    return state.rootElementId;
  },
  getOutputElements(state) {
    return Object.values(state.normalizedElements);
  },
  values(state) {
    return state.values;
  },
  getElementValue(state) {
    return (property: string) =>
      state.values && property && state.values[property];
  },
  existsId(state) {
    return (id: string) =>
      state.normalizedElements && id in state.normalizedElements;
  },
  getElementById(state) {
    return (id: ElementId) =>
      state.normalizedElements && state.normalizedElements[id];
  },
  getSelectedElementId(state) {
    return state.selectedElementId;
  },
  getSelectedElement(state) {
    return (
      state.normalizedElements &&
      state.selectedElementId &&
      state.normalizedElements[state.selectedElementId]
    );
  },
  getSelectedElementType(state) {
    return (
      state.normalizedElements &&
      state.selectedElementId &&
      state.normalizedElements[state.selectedElementId].type
    );
  }
};
