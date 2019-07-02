import GeneralInfo from './GeneralInfo';
import { withFormik } from 'formik';
import { mapPropsToValues, validationSchema, handleSubmit } from './service';

export default withFormik({ mapPropsToValues, validationSchema, handleSubmit })(GeneralInfo);
