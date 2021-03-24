import { EtLayoutAttributesModel } from './EtLayoutAttributesModel';

export class EtInputsAttributesModel extends EtLayoutAttributesModel {
  label: string;
  stackLabel: boolean;
  hint: string;
  hideHint: boolean;
  prefix: string;
  suffix: string;
  clearable: boolean;

  filled: boolean;
  outlined: boolean;
  square: boolean;
  rounded: boolean;
  dense: boolean;
  color: string;
  labelColor: string;
  bgColor: string;

  constructor(model: any = {}) {
    super(model);
    this.label = model.label || 'Unlabeled *';
    this.stackLabel = model.stackLabel || true;
    this.hint = model.hint || undefined;
    this.hideHint = model.hideHint || false;
    this.prefix = model.prefix || undefined;
    this.suffix = model.suffix || undefined;
    this.clearable = model.clearable || false;

    this.filled = model.filled || false;
    this.outlined = model.outlined || true;
    this.rounded = model.rounded || false;
    this.square = model.square || false;
    this.dense = model.dense || true;
    this.color = model.color || undefined;
    this.labelColor = model.labelColor || undefined;
    this.bgColor = model.bgColor || undefined;
  }
}
