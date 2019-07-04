import React, { ReactNode, Fragment } from 'react';
import { InjectedFormikProps, Form, Field } from 'formik';
import { FormValues, FormProps } from './service';
import FormField, { FIELD_TYPE } from '../../types/Field';
import classnames from 'classnames';
import './GeneralInfo.css';

const getFieldComponentFromType = (
  field: FormField,
  isFormValid: boolean,
  touched?: boolean,
  error?: string,
): ReactNode => {
  switch (field.type) {
    case FIELD_TYPE.NUMBER:
    case FIELD_TYPE.TEXT:
      return (
        <Fragment key={field.name}>
          <Field
            placeholder={field.label}
            name={field.name}
            type={field.type}
            className={classnames('General-info__field', {
              'General-info__field--error': touched && error,
              'General-info__field--valid': isFormValid || (touched && !Boolean(error)),
            })}
          />
          <span className="General-info__error-container">{touched && error}</span>
        </Fragment>
      );
    case FIELD_TYPE.SELECT:
      return (
        <Fragment key={field.name}>
          <Field
            placeholder={field.label}
            name={field.name}
            component="select"
            className={classnames('General-info__field', {
              'General-info__field--error': touched && error,
              'General-info__field--valid': isFormValid || (touched && !Boolean(error)),
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
        </Fragment>
      );
  }
};

const GeneralInfo: React.SFC<InjectedFormikProps<FormProps, FormValues>> = ({
  fields,
  touched,
  errors,
  isValid,
}) => (
  <Form className="General-info">
    {fields.map(field =>
      getFieldComponentFromType(field, isValid, touched[field.name], errors[field.name]),
    )}
    <button key="submit" className="General-info__field" type="submit" disabled={!isValid}>
      Submit
    </button>
  </Form>
);

export default GeneralInfo;
