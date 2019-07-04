import Field, { FIELD_TYPE, VALIDATION_RULES } from '../types/Field';

export const fields: Field[] = [
  {
    id: 1,
    name: 'firstName',
    label: 'First Name',
    type: FIELD_TYPE.TEXT,
    required: true,
  },
  {
    id: 2,
    name: 'lastName',
    label: 'Last Name',
    type: FIELD_TYPE.TEXT,
    required: true,
  },
  {
    id: 3,
    name: 'email',
    label: 'Email',
    type: FIELD_TYPE.TEXT,
    validationRule: VALIDATION_RULES.EMAIL,
    required: true,
  },
  {
    id: 4,
    name: 'age',
    label: 'Age',
    type: FIELD_TYPE.NUMBER,
    required: true,
  },
  {
    id: 5,
    name: 'phoneNumber',
    label: 'Phone Number',
    type: FIELD_TYPE.TEXT,
    validationRule: VALIDATION_RULES.PHONE_NUMBER,
    required: false,
  },
  {
    id: 6,
    name: 'address',
    label: 'Address',
    type: FIELD_TYPE.TEXT,
    required: true,
  },
  {
    id: 7,
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
