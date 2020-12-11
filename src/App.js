import './App.css';
import FormikForm from './FormikForm';
import FormikFormWithYup from './FormikFormWithYup';

function App() {
  return (
    <div className="App">
      
      <h1> Formik Practice </h1>
      <FormikForm />
      <br />
      <br />
      <br />

      <h1> Formik with Yup Practice </h1>
      <FormikFormWithYup />

    </div>
  );
}

export default App;
