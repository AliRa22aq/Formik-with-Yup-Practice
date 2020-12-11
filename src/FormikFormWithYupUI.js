import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';



const FormikFormWithYupUI = () => {

    const FormSchema = yup.object().shape({
        email: yup.string().email().required('This field is required.'), 
        password: yup.string()
            .min(6, 'Password is too short.')
            .max(20, 'Password is too long.')
            .required('This field is required.')
    });

    return (
        <Formik 
        initialValues={ {
            name: "",
            age: 0
        }} 
        onSubmit={(values)=>{
            console.log(values);
            //
        }}
        validationSchema= {FormSchema}
            
        >

        {
            (formik)=>(
            <div>
                    <Form onSubmit={formik.handleSubmit} >

                    <label htmlFor="email"> Please Enter email <br /></label>
                    <Field name="email" as= {TextField} lable="Emal::" varient="Standard" type="email" /> <br />
                    <ErrorMessage name="name" />

                    <br />
                    <br />

                    <label htmlFor="password"> Please Enter Password <br /></label>
                    <Field name="password" as= {TextField} lable="password::" varient="Filled" type="password" /> <br />
                    <ErrorMessage name="password" />
                    <br />

                        <input type= "submit" />
                    </Form>
                </div>
            )
        }
       
        </Formik>
    )
}

export default FormikFormWithYupUI
