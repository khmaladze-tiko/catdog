import React, { useState } from "react";

import { CircularProgress } from "@mui/material";
import { Redirect } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

const LogIn = () => {
    const [loading, setLoading] = useState(false)
    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("The email is required"),
            password: Yup.string()
                .required("The email is required")
        }),
        onSubmit: (values) => {
            setLoading(true)
            console.log(values)
        }
    })

    // errors = {
    //     email: "sdfxcgvhbjnm"
    // }

    return (
        <div className="container">
            <div className="signin_wrapper" style={{margin:"200px"}}>

                <form onSubmit={formik.handleSubmit}>
                    <h2>Please login</h2>
                    <input
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    { formik.touched.email && formik.errors.email ?
                     
                        <div className="error_label">
                            {formik.errors.email}
                        </div>
                     
                    :null}
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                     { formik.touched.password && formik.errors.password ?
                     
                     <div className="error_label">
                         {formik.errors.password}
                     </div>
                  
                 :null}

                    { loading ? 
                        <CircularProgress color="secondary" className="progress"/>
                    :
                    <button type="submit">Log In</button>
                    }

                    
                </form>

            </div>
        </div>
    )
}

export default LogIn;