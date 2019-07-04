import FormField from './Field';

export type FormValueType = string | number | Date;

export default interface ProvidedInfo {
  id: number;
  value: FormValueType;
  fieldId: FormField['id'];
}
