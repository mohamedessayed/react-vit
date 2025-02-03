import React from 'react'

export default function ConatctFormik() {
    return <>
        <div className='py-5 text-center container'>
            <h1>Contact us</h1>
            <div className="w-50 m-auto">
                <form className="g-3">
                    <div className="mb-3">
                        <label htmlFor="validationCustom01" className="form-label">First name</label>
                        <input name='first_name' type="text" className="form-control" id="validationCustom01" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom02" className="form-label">Last name</label>
                        <input name='last_name' type="text" className="form-control" id="validationCustom02" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <input name='user_name' type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>



                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form >
            </div>
        </div >

    </>
}
