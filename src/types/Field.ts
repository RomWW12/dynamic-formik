export enum FIELD_TYPE {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
}

export enum VALIDATION_RULES {
  EMAIL = 'email',
  PHONE_NUMBER = 'phoneNumber',
}

export interface Choice {
  id: number;
  value: string;
}

export default interface FormField {
  id: number;
  name: string;
  label: string;
  required: boolean;
  type: FIELD_TYPE;
  validationRule?: VALIDATION_RULES;
  choices?: Choice[];
}
