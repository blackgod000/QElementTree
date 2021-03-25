import { InsertEvent, ReorderEvent } from 'vue-easy-dnd';

export interface IPropertyValue {
  property: string;
  value: any;
}

export interface IFieldValue {
  field: string;
  value: any;
}

export interface ISaveElementPropertyPayload extends IPropertyValue {
  elementId: ElementId;
}

export interface ISaveElementAttributePayload extends IPropertyValue {
  elementId: ElementId;
}

export interface IDropInsertPayload {
  parentId: ElementId;
  elementId: ElementId;
  dropEvent: InsertEvent;
}

export interface IDropReorderPayload {
  parentId: ElementId;
  dropEvent: ReorderEvent;
}

export interface IDragRemovePayload {
  parentId: ElementId;
  elementId: ElementId;
}
