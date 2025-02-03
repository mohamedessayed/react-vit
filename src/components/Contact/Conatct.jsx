import React, { useState } from 'react'

export default function Conatct() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [errors, setErrors] = useState([]);

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const error = [];

        if (firstName === '') {
            error.push({
                element: 'firstName',
                message: 'Required field'
            })
        } else if (firstName.length < 3) {
            error.push({
                element: 'firstName',
                message: 'This field must be greater than 2 chracter'
            })
        }

        if (lastName === '') {
            error.push({
                element: 'lastName',
                message: 'Required field'
            })
        } else if (lastName.length < 3) {
            error.push({
                element: 'lastName',
                message: 'This field must be greater than 2 chracter'
            })
        }

        if (userName === '') {
            error.push({
                element: 'userName',
                message: 'Required field'
            })
        } else if (userName.length < 3) {
            error.push({
                element: 'userName',
                message: 'This field must be greater than 2 chracter'
            })
        }

        setErrors(error);       

    }

    return <>
        <div className='py-5 text-center container'>
            <h1>Contact us</h1>
            <div className="w-50 m-auto">
                <form onSubmit={handleFormSubmit} className="g-3">
                    <div className="mb-3">
                        <label htmlFor="validationCustom01" className="form-label">First name</label>
                        <input name='first_name' type="text" className="form-control" id="validationCustom01" value={firstName} onChange={handleFirstName} />

                        <div className='text-danger'>
                            {errors && errors.map((error) => error.element === 'firstName' ? error.message : null)}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom02" className="form-label">Last name</label>
                        <input name='last_name' value={lastName} onChange={handleLastName} type="text" className="form-control" id="validationCustom02" />
                        <div className='text-danger'>
                            {errors && errors.map((error) => error.element === 'lastName' ? error.message : null)}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <input value={userName} onChange={handleUserName} name='user_name' type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" />
                            <div className='text-danger'>
                                {errors && errors.map((error) => error.element === 'userName' ? error.message : null)}
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
