import { Module } from 'vuex';

import { ElementBuilderState, state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const ElementBuilderModule: Module<ElementBuilderState, unknown> = {
  namespaced: true,
  actions,
  mutations,
  getters,
  state
};
