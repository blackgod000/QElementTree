export interface IEtAddElementsModel {
  layout: IEtAddElementModel[];
  inputs: IEtAddElementModel[];
  statics: IEtAddElementModel[];
}

export interface IEtAddElementModel {
  type: string | number;
  label: string;
  icon: string;
}
