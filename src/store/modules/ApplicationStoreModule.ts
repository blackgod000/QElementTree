import { $store } from 'src/store';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';

@Module({
  dynamic: true,
  store: $store,
  namespaced: true,
  name: 'ApplicationStoreModule'
})
class ApplicationStoreModule extends VuexModule {
  elements: any[] = getExampleElements();

  get rootElementId(): ElementId {
    return 1;
  }

  @Action
  saveElements(elements: any[]) {
    this.SaveElements(elements);
  }

  @Mutation
  SaveElements(elements: any[]) {
    this.elements = JSON.parse(JSON.stringify(elements));
  }

  @Mutation
  ClearElements() {
    this.elements = [
      {
        id: 1,
        type: 'column'
      }
    ];
  }
}

export const ApplicationStore = getModule(ApplicationStoreModule);

function getExampleElements(): any[] {
  return [
    {
      id: 1,
      attributes: {
        flexSize: 1
      },
      elementIds: [
        'fd32c482-4d0a-4eb6-8e06-8a86af5ca096',
        '3661412b-c264-4146-980c-b0b9044ced73',
        '0036ead0-c2c2-42af-9084-eadde4065e4b',
        '75014daf-ebbd-4abf-b4b8-3dc0ddfed7b3'
      ],
      type: 'column'
    },
    {
      id: 'fd32c482-4d0a-4eb6-8e06-8a86af5ca096',
      attributes: {
        flexSize: 1,
        type: 'text',
        text: 'Test element tree',
        heading: 'text-h3',
        alignment: 'text-center',
        bold: false,
        italic: false
      },
      type: 'paragraph'
    },
    {
      id: '3661412b-c264-4146-980c-b0b9044ced73',
      attributes: {
        flexSize: 1,
        type: 'text-box',
        text:
          'Text box example\n  All elements can be dragged and dropped in specific containers defined with dashed border.\n  To add new elements simply drag the chosen element from the add element tab and drop it in a container element.\n  To select an element hold the mouse down for 600 ms over the chosen element.\n',
        heading: 'text-body2',
        alignment: 'text-left',
        bold: false,
        italic: false
      },
      type: 'paragraph'
    },
    {
      id: '0036ead0-c2c2-42af-9084-eadde4065e4b',
      attributes: {
        flexSize: 1,
        backgroundColor: null
      },
      elementIds: [
        '5ba87752-c17e-40b5-9aad-4ded7c552ffb',
        '49fadc83-12e9-4829-a4a1-8f35fd456f70',
        '83a8dd3c-1396-4d87-b1fe-0c19520e19f5'
      ],
      type: 'row'
    },
    {
      id: '5ba87752-c17e-40b5-9aad-4ded7c552ffb',
      attributes: {
        flexSize: 1,
        label: 'First name',
        stackLabel: true,
        hideHint: false,
        clearable: false,
        filled: false,
        outlined: true,
        rounded: false,
        square: false,
        dense: true,
        type: 'text'
      },
      field: 'firstName',
      type: 'input'
    },
    {
      id: '83a8dd3c-1396-4d87-b1fe-0c19520e19f5',
      attributes: {
        flexSize: '3',
        label: 'Address',
        stackLabel: true,
        hideHint: false,
        clearable: false,
        filled: false,
        outlined: true,
        rounded: false,
        square: false,
        dense: true,
        type: 'text'
      },
      field: 'address',
      type: 'input'
    },
    {
      id: '49fadc83-12e9-4829-a4a1-8f35fd456f70',
      attributes: {
        flexSize: 1,
        label: 'Last name',
        stackLabel: true,
        hideHint: false,
        clearable: false,
        filled: false,
        outlined: true,
        rounded: false,
        square: false,
        dense: true,
        type: 'text'
      },
      field: 'lastName',
      type: 'input'
    },
    {
      id: '75014daf-ebbd-4abf-b4b8-3dc0ddfed7b3',
      attributes: {
        flexSize: 1,
        backgroundColor: null
      },
      elementIds: [
        '2591b86f-5285-4d2c-bef5-61ed30ea0760',
        'ba4363e3-5691-4b50-97a9-bd10332381f4'
      ],
      type: 'row'
    },
    {
      id: '2591b86f-5285-4d2c-bef5-61ed30ea0760',
      attributes: {
        flexSize: 1
      },
      elementIds: [
        '60e172d3-d629-4bbe-93ec-5b6fc14b9850',
        'f2f2345f-07ba-4205-ace6-19cae9d62cff',
        'c6c6ba72-ffa6-4697-9c6f-bf65eb0ebdab',
        '3f201b5d-1c64-46f4-9169-671bd1d0a1e5'
      ],
      type: 'column'
    },
    {
      id: 'ba4363e3-5691-4b50-97a9-bd10332381f4',
      attributes: {
        flexSize: 1
      },
      elementIds: [
        'ee2a8ac3-12da-4837-990a-04c577f25f8b',
        '7cbecce3-5253-4026-8870-b33755e43891'
      ],
      type: 'column'
    },
    {
      id: '3f201b5d-1c64-46f4-9169-671bd1d0a1e5',
      attributes: {
        flexSize: 1,
        label: 'Birth date',
        stackLabel: true,
        hideHint: false,
        clearable: false,
        filled: false,
        outlined: true,
        rounded: false,
        square: false,
        dense: true
      },
      field: 'birthDate',
      type: 'date-time'
    },
    {
      id: 'c6c6ba72-ffa6-4697-9c6f-bf65eb0ebdab',
      attributes: {
        flexSize: 1,
        label: 'Gender',
        stackLabel: true,
        hideHint: false,
        clearable: false,
        filled: false,
        outlined: true,
        rounded: false,
        square: false,
        dense: true,
        type: 'single',
        options: ['Male', 'Female']
      },
      field: 'gender',
      type: 'select'
    },
    {
      id: '7cbecce3-5253-4026-8870-b33755e43891',
      attributes: {
        flexSize: 1
      },
      field: '7cbecce3-5253-4026-8870-b33755e43891',
      type: 'editor'
    },
    {
      id: 'f2f2345f-07ba-4205-ace6-19cae9d62cff',
      attributes: {
        flexSize: 1,
        label: 'Age',
        stackLabel: true,
        hideHint: false,
        clearable: false,
        filled: false,
        outlined: true,
        rounded: false,
        square: false,
        dense: true,
        type: 'number'
      },
      field: 'age',
      type: 'input'
    },
    {
      id: '60e172d3-d629-4bbe-93ec-5b6fc14b9850',
      attributes: {
        flexSize: 1,
        type: 'text',
        text: 'Title 1',
        heading: null,
        alignment: 'text-left',
        bold: false,
        italic: false
      },
      type: 'paragraph'
    },
    {
      id: 'ee2a8ac3-12da-4837-990a-04c577f25f8b',
      attributes: {
        flexSize: 1,
        type: 'text',
        text: 'Your description:',
        heading: null,
        alignment: 'text-left',
        bold: false,
        italic: false
      },
      type: 'paragraph'
    }
  ];
}
