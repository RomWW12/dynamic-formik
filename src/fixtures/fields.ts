import Field, { FIELD_TYPE, VALIDATION_RULES } from '../types/Field';

export const fields: Field[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: FIELD_TYPE.TEXT,
    required: true,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: FIELD_TYPE.TEXT,
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: FIELD_TYPE.TEXT,
    validationRule: VALIDATION_RULES.EMAIL,
    required: true,
  },
  {
    name: 'age',
    label: 'Age',
    type: FIELD_TYPE.NUMBER,
    required: true,
  },
  {
    name: 'phoneNumber',
    label: 'phoneNumber',
    type: FIELD_TYPE.NUMBER,
    validationRule: VALIDATION_RULES.MAX_LENGTH_10,
    required: false,
  },
  {
    name: 'address',
    label: 'Address',
    type: FIELD_TYPE.TEXT,
    required: true,
  },
  {
    name: 'country',
    label: 'Country',
    type: FIELD_TYPE.SELECT,
    required: true,
    choices: [
      {
        id: 1,
        value: 'France',
      },
      {
        id: 2,
        value: 'England',
      },
      {
        id: 3,
        value: 'United States',
      },
    ],
  },
];
