import { EtElementModel } from '../Models/EtElementModel';

export interface ElementBuilderState {
  builderMode: boolean;
  rootElementId: ElementId | null;
  normalizedElements: { [field: string]: EtElementModel };
  selectedElementId: string | number | null;
  values: Values | null;
}

export function state(): ElementBuilderState {
  return {
    builderMode: false,
    rootElementId: null,
    normalizedElements: {},
    selectedElementId: null,
    values: null
  };
}
