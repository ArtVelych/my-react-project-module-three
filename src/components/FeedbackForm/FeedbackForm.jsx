import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  email: "",
};

const FeedbackForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
        <Field type="text" name="username" />
        <Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
