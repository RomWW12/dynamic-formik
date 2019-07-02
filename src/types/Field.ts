export enum FIELD_TYPE {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
}

export enum VALIDATION_RULES {
  EMAIL = 'email',
  MAX_LENGTH_10 = 'maxLength10',
}

export interface Choice {
  id: number;
  value: string;
}

export default interface Field {
  name: string;
  label: string;
  required: boolean;
  type: FIELD_TYPE;
  validationRule?: VALIDATION_RULES;
  choices?: Choice[];
}
