import React, { ReactNode } from 'react';
import { InjectedFormikProps, Form, Field } from 'formik';
import { FormValues, FormProps } from './service';
import FormField, { FIELD_TYPE } from '../../types/Field';
import './GeneralInfo.css';

const getFieldComponentFromType = (field: FormField): ReactNode => {
  switch (field.type) {
    case FIELD_TYPE.NUMBER:
    case FIELD_TYPE.TEXT:
      return (
        <Field
          key={field.name}
          placeholder={field.label}
          name={field.name}
          type={field.type}
          className="General-info__field"
        />
      );
    case FIELD_TYPE.SELECT:
      return (
        <Field
          key={field.name}
          placeholder={field.label}
          name={field.name}
          component="select"
          className="General-info__field"
        >
          {field.choices &&
            field.choices.map(choice => (
              <option key={choice.id} value={choice.id}>
                {choice.value}
              </option>
            ))}
        </Field>
      );
  }
};

const GeneralInfo: React.SFC<InjectedFormikProps<FormProps, FormValues>> = ({ fields }) => (
  <Form className="General-info">
    {fields.map(field => getFieldComponentFromType(field))}
    <button className="General-info__field" type="submit">
      Submit
    </button>
  </Form>
);

export default GeneralInfo;
