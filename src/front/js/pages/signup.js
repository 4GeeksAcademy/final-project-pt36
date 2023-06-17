import React from "react";

export const Signup = () =>  {

    return (
        <>
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationServer01" class="form-label">First name</label>
                    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServer02" class="form-label">Last name</label>
                    <input type="text" class="form-control is-valid" id="validationServer02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">R.U.T</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Enter your R.U.T
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServer03" class="form-label">Email</label>
                    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                    <div id="validationServer03Feedback" class="invalid-feedback">
                        Please provide a valid email.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationServer04" class="form-label">Rol</label>
                    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                        <option selected disabled value="">Choose...</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <div id="validationServer04Feedback" class="invalid-feedback">
                        Please select a valid role.
                    </div>
                </div>
                <div className="row">
                <div class="col-md-4">
                    <label for="validationServer01" class="form-label">Password</label>
                    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServer02" class="form-label">Confirm Password</label>
                    <input type="text" class="form-control is-valid" id="validationServer02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                </div>
               
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                        <label class="form-check-label" for="invalidCheck3">
                            Agree to terms and conditions
                        </label>
                        <div id="invalidCheck3Feedback" class="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </>

    )



}