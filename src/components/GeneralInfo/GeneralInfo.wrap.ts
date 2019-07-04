import GeneralInfo from './GeneralInfo';
import { withFormik } from 'formik';
import { mapPropsToValues, validationSchema, isInitialValid, handleSubmit } from './service';

export default withFormik({ mapPropsToValues, validationSchema, isInitialValid, handleSubmit })(
  GeneralInfo,
);
