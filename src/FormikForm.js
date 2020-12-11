import { useFormik } from 'formik'
import React from 'react'

const FormikForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
          },
        validate: (values) => {
            const errors = {}
            if (!values.email){
                errors.email = "Email Required"
            }
            if(!values.password){
                errors.password = "Password Required"
            }
            return errors
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
                <label> 
                    Please Enter Email <br/>
                </label> 
                <input 
                    type="text" 
                    id="email" 
                    onChange={formik.handleChange}
                    value= {formik.values.email}
                    />
                <br />
                {formik.errors.email? 
                <div className="error">{formik.errors.email}</div>:
                null
                }
                <br/>
                <label> 
                    Please Enter Password <br/>
                </label>
                <input 
                    type="password" 
                    id="password" 
                    onChange={formik.handleChange}
                    value= {formik.values.password}
                />
                <br />
                {formik.errors.password? 
                <div className="error">{formik.errors.password}</div>:
                null
                }
                <br/>
                <input type= "submit" />
            </form>
        </div>
    )
}

export default FormikForm
