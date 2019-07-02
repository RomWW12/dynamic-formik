import React, { ReactNode } from 'react';
import { InjectedFormikProps, Form, Field } from 'formik';
import { FormValues, FormProps } from './service';
import FormField, { FIELD_TYPE } from '../../types/Field';
import classnames from 'classnames';
import './GeneralInfo.css';

const getFieldComponentFromType = (
  field: FormField,
  touched?: boolean,
  error?: string,
): ReactNode => {
  switch (field.type) {
    case FIELD_TYPE.NUMBER:
    case FIELD_TYPE.TEXT:
      return (
        <>
          <Field
            key={field.name}
            placeholder={field.label}
            name={field.name}
            type={field.type}
            className={classnames('General-info__field', {
              'General-info__field--error': touched && error,
            })}
          />
          <span className="General-info__error-container">{touched && error}</span>
        </>
      );
    case FIELD_TYPE.SELECT:
      return (
        <>
          <Field
            key={field.name}
            placeholder={field.label}
            name={field.name}
            component="select"
            className={classnames('General-info__field', {
              'General-info__field--error': touched && error,
            })}
          >
            {field.choices &&
              field.choices.map(choice => (
                <option key={choice.id} value={choice.id}>
                  {choice.value}
                </option>
              ))}
          </Field>
          <span className="General-info__error-container">{touched && error}</span>
        </>
      );
  }
};

const GeneralInfo: React.SFC<InjectedFormikProps<FormProps, FormValues>> = ({
  fields,
  touched,
  errors,
}) => (
  <Form className="General-info">
    <span className="has-error  " />
    {fields.map(field => getFieldComponentFromType(field, touched[field.name], errors[field.name]))}
    <button className="General-info__field" type="submit">
      Submit
    </button>
  </Form>
);

export default GeneralInfo;
