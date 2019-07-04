import { number, object, string, MixedSchema } from 'yup';
import FormField, { FIELD_TYPE, VALIDATION_RULES } from '../../types/Field';
import ProvidedInfo, { FormValueType } from '../../types/ProvidedInfo';

export interface FormProps {
  fields: FormField[];
  user: ProvidedInfo[];
}

export interface FormValues {
  [field: string]: FormValueType;
}

export interface ErrorType {
  [field: string]: string | undefined;
}

export interface TouchedType {
  [field: string]: boolean | undefined;
}

const getFieldSchemaFromType = ({ type, validationRule, label }: FormField): MixedSchema => {
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
      return number().typeError(`Please specify a ${label}`);
  }
};

export const validationSchema = ({ fields }: FormProps) =>
  object().shape(
    fields.reduce((shape: { [key: string]: MixedSchema }, field) => {
      let fieldSchema = getFieldSchemaFromType(field);

      if (field.required) {
        fieldSchema = fieldSchema.required(`${field.label} is a required field.`);
      } else {
        fieldSchema = fieldSchema.nullable();
      }

      shape[field.name] = fieldSchema;
      return shape;
    }, {}),
  );

export const mapPropsToValues = ({ fields, user }: FormProps) =>
  fields.reduce((values: { [key: string]: string | null }, field) => {
    const providedInfo = user.find(info => info.fieldId === field.id);

    switch (field.type) {
      case FIELD_TYPE.NUMBER:
      case FIELD_TYPE.TEXT:
        values[field.name] = providedInfo ? providedInfo.value.toString() : '';
        break;
      case FIELD_TYPE.SELECT:
        values[field.name] = providedInfo ? providedInfo.value.toString() : null;
        break;
    }
    return values;
  }, {});

export const isInitialValid: (props: FormProps) => boolean = props =>
  validationSchema(props).isValidSync(mapPropsToValues(props));

export const handleSubmit = (values: FormValues) => {
  alert(values);
};
