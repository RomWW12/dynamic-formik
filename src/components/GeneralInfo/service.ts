import { number, object, string, MixedSchema } from 'yup';
import FormField, { FIELD_TYPE, VALIDATION_RULES } from '../../types/Field';

export interface FormProps {
  fields: FormField[];
}

export type FormValueType = string | number | Date | null;

export interface FormValues {
  [field: string]: FormValueType;
}

export interface ErrorType {
  [field: string]: string | undefined;
}

export interface TouchedType {
  [field: string]: boolean | undefined;
}

const getFieldSchemaFromType = ({ type, validationRule }: FormField): MixedSchema => {
  switch (type) {
    case FIELD_TYPE.NUMBER:
      if (validationRule && validationRule === VALIDATION_RULES.PHONE_NUMBER) {
        return string().matches(/^0[0-9]{9}$/);
      }
      return number();
    case FIELD_TYPE.TEXT:
      if (validationRule && validationRule === VALIDATION_RULES.EMAIL) {
        return string().email();
      }
      return string();
    case FIELD_TYPE.SELECT:
      return number();
  }
};

export const validationSchema = ({ fields }: FormProps) =>
  object().shape(
    fields.reduce((shape: { [key: string]: MixedSchema }, field) => {
      let fieldSchema = getFieldSchemaFromType(field);

      if (field.required) {
        fieldSchema = fieldSchema.required();
      } else {
        fieldSchema = fieldSchema.nullable();
      }

      shape[field.name] = fieldSchema;
      return shape;
    }, {}),
  );

export const mapPropsToValues = ({ fields }: FormProps) =>
  fields.reduce((values: { [key: string]: string | null }, field) => {
    switch (field.type) {
      case FIELD_TYPE.NUMBER:
      case FIELD_TYPE.TEXT:
        values[field.name] = '';
        break;
      case FIELD_TYPE.SELECT:
        values[field.name] = null;
        break;
    }
    return values;
  }, {});

export const handleSubmit = (values: FormValues) => {
  alert(values);
};
