import React from 'react'

export default function Conatct() {
    return <>
        <div className='py-5 text-center container'>
            <h1>Contact us</h1>
            <div className="w-50 m-auto">
                <form class="g-3">
                    <div class="mb-3">
                        <label for="validationCustom01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="validationCustom02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" value="Otto" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="validationCustomUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>



                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form >
            </div>
        </div >

    </>
}
