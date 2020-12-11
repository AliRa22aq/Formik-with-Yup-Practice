import './App.css';
import FormikForm from './FormikForm';
import FormikFormWithYup from './FormikFormWithYup';
import FormikFormWithYupContext from './FormikFormWithYupContext';
import FormikFormWithYupUI from './FormikFormWithYupUI';

function App() {
  return (
    <div className="App">
      
      <h1> Venila Formik </h1>
      <FormikForm />
      <br />
      <br />

      <h1> Formik with Yup </h1>
      <FormikFormWithYup />
      <br />
      <br />

      
      <h1> Formik with Yup and Context </h1>
      <FormikFormWithYupContext />
      <br />
      <br />

      <h1> Formik with Yup and Material UI </h1>
      <FormikFormWithYupUI />
      <br />
      <br />

    </div>
  );
}

export default App;
