export enum FIELD_TYPE {
    TEXT = 'text',
    NUMBER = 'number',
    SELECT = 'select',
    ARRAY = 'array',
}

export default interface Field {
    name: string;
    label: string;
    required: boolean;
    type: FIELD_TYPE;
}