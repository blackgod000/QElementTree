/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ActionTree } from 'vuex';
import { createElementModel } from '../Factories/ElementModelFactory';
import {
  EtContainerElementModel,
  EtElementModel,
  IEtElementModel
} from '../Models/EtElementModel';
import { ElementBuilderState } from './state';
import {
  ISaveElementAttributePayload,
  IDragRemovePayload,
  IDropInsertPayload,
  IDropReorderPayload,
  IPropertyValue,
  IFieldValue
} from './types';

export const actions: ActionTree<ElementBuilderState, unknown> = {
  '[ElementTree] Save BuilderMode': function({ commit }, builderMode: boolean) {
    commit('SaveBuilderMode', builderMode);
  },
  '[ElementTree] Save RootElementId': function(
    { commit },
    rootElementId: ElementId
  ) {
    commit('SaveRootElementId', rootElementId);
  },
  '[ElementTree] Save Elements': function(
    { commit },
    elements: IEtElementModel[]
  ) {
    if (!elements) return;

    commit('SaveElements', elements);
  },
  '[ElementTree] Save Values': function({ commit }, values: Values) {
    if (!values) return;

    commit('SaveValues', values);
  },
  '[ElementTree] Change Value': function(
    { getters, commit },
    { field, value }: IFieldValue
  ) {
    if (!getters.values) return;

    commit('SaveElementValue', <IFieldValue>{
      field,
      value
    });
  },
  '[ElementBuilder] Select Element': function({ commit, getters }, elementId) {
    if (!elementId || !getters.isBuilderMode) return;

    commit('SaveSelectedElement', elementId);
  },
  '[ElementBuilder] Unselect Element': function({ commit }) {
    commit('ClearSelectedElement');
  },
  '[ElementBuilder] Change Element Property': function(
    { commit, getters },
    { property, value }: IPropertyValue
  ) {
    const elementId: ElementId = getters.getSelectedElementId;

    commit('SaveElementProperty', {
      elementId,
      property,
      value
    });
  },
  '[ElementBuilder] Change Element Attribute': function(
    { commit, getters },
    { property, value }: IPropertyValue
  ) {
    const elementId: ElementId = getters.getSelectedElementId;

    commit('SaveElementAttribute', <ISaveElementAttributePayload>{
      elementId,
      property,
      value
    });
  },
  // TODO: refactor deleting logic
  '[ElementBuilder] Delete Element': async function(
    { dispatch, commit, getters },
    elementId: ElementId
  ) {
    const parentId = await dispatch(
      '[ElementBuilder] Find Parent Element',
      elementId
    );

    commit('RemoveFromParentElements', {
      parentId,
      elementId
    });

    await dispatch('[ElementBuilder] Delete Element Tree', elementId);

    if (
      getters.getSelectedElementId &&
      getters.getSelectedElementId === elementId
    ) {
      commit('ClearSelectedElement');
    }
  },
  '[ElementBuilder] Find Parent Element': function(
    { getters },
    elementId: ElementId
  ) {
    if (!elementId) throw Error('Element id is missing.');

    const elements: EtContainerElementModel[] = getters.getOutputElements;

    console.log('elementId', elementId);

    console.log('elements', elements);

    const parentElement = elements.find(
      element => element.elementIds && element.elementIds.includes(elementId)
    );
    console.log('parentEl', parentElement);

    if (!parentElement) return null;

    return parentElement.id;
  },
  '[ElementBuilder] Delete Element Tree': function(
    { dispatch, commit, getters },
    elementId
  ) {
    const element: EtElementModel = getters.getElementById(elementId);

    commit('DeleteElement', element.id);

    if (
      !(<EtContainerElementModel>element).elementIds ||
      (<EtContainerElementModel>element).elementIds.length === 0
    ) {
      return;
    }

    (<EtContainerElementModel>element).elementIds.forEach(
      (childElementId: ElementId) => {
        <unknown>(
          dispatch('[ElementBuilder] Delete Element Tree', childElementId)
        );
      }
    );
  },
  '[ElementBuilder] Drop Insert': function(
    { commit },
    { parentId, dropEvent }: IDropInsertPayload
  ) {
    let elementId: ElementId = dropEvent.data;

    try {
      const newElement = createElementModel({ type: elementId });

      commit('SaveElement', newElement);

      elementId = newElement.id;
    } catch {}

    if (parentId === elementId) return;

    commit('InsertToParentElements', {
      parentId,
      elementId,
      dropEvent
    });
  },
  '[ElementBuilder] Drop Reorder': function(
    { commit },
    { parentId, dropEvent }: IDropReorderPayload
  ) {
    commit('ReorderParentElements', {
      parentId,
      dropEvent
    });
  },
  '[ElementBuilder] Drag Remove': function(
    { commit },
    { parentId, elementId }: IDragRemovePayload
  ) {
    commit('RemoveFromParentElements', {
      parentId,
      elementId
    });
  }
};
