import { EtElementModel, IEtElementModel } from '../Models/EtElementModel';

export interface ElementBuilderState {
  builderMode: boolean;
  rootElementId: ElementId | null;
  elements: IEtElementModel[];
  normalizedElements: { [field: string]: EtElementModel };
  selectedElementId: string | number | null;
  values: Values | null;
}

export function state(): ElementBuilderState {
  return {
    builderMode: false,
    rootElementId: null,
    elements: [],
    normalizedElements: {},
    selectedElementId: null,
    values: null
  };
}
