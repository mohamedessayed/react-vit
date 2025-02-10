import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
export default function ConatctFormik() {
    const initValues = {first_name:'',last_name:'',user_name:''}
    const ContactUsSchema = Yup.object().shape({
        first_name:Yup.string().required('This filed is required').min(3,'the minimum chracters is 3'),
        last_name:Yup.string().required('This filed is required').min(3,'the minimum chracters is 3'),
        user_name:Yup.string().required('This filed is required').min(3,'the minimum chracters is 3')
    })
    return <>
        <div className='py-5 text-center container'>
            <h1>Contact us</h1>
            <div className="w-50 m-auto">
                <Formik
                initialValues={initValues}
                validationSchema={ContactUsSchema}
                onSubmit={(values,{ setSubmitting,resetForm })=>{
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false)
                        resetForm()
                    }, 2000);
                }}
                >
                    {({values,handleChange,handleSubmit,isSubmitting,errors,touched})=><form onSubmit={handleSubmit} className="g-3">
                        <div className="mb-3">
                            <label htmlFor="validationCustom01" className="form-label">First name</label>
                            <input value={values.first_name} onChange={handleChange} name='first_name' type="text" className="form-control" id="validationCustom01" />
                            <div className="text-danger">
                                {errors.first_name&&touched.first_name?errors.first_name:null}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationCustom02" className="form-label">Last name</label>
                            <input value={values.last_name} onChange={handleChange} name='last_name' type="text" className="form-control" id="validationCustom02" />
                            <div className="text-danger">
                                {errors.last_name&&touched.last_name?errors.last_name:null}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                            <div className="input-group has-validation">
                                <input value={values.user_name} onChange={handleChange} name='user_name' type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" />
                                <div className="text-danger">
                                {errors.user_name&&touched.user_name?errors.user_name:null}
                            </div>
                            </div>
                        </div>



                        <div className="mb-3">
                            <button disabled={isSubmitting} className="btn btn-primary" type="submit">{isSubmitting&&<FontAwesomeIcon className='fa-spin' icon={faSpinner}/>} Submit form</button>
                        </div>
                    </form >}
                </Formik>
            </div>
        </div >

    </>
}
