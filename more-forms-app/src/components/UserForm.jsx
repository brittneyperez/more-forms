import React, { useState } from 'react';

const UserForm = ( props ) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    // const [ hasBeenSubmitted, setHasBeenSubmitted ] = useState(false);
    
    const [ firstNameError, setFirstNameError ] = useState("");
    const [ lastNameError, setLastNameError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    // const [ confirmPasswordError, setConfirmPasswordError ] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        
        // setHasBeenSubmitted( true );
    };
    
    // VALIDATIONS
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    };
    // const handleConfirmPassword = (e) => {
    //     setConfirmPassword(e.target.value);
    //     if(e.target.value != setPassword) {
    //         setConfirmPasswordError("Password must match");
    //     } else {
    //         setConfirmPasswordError("");
    //     }
    // };
    
    return (
        <div className='container-fluid d-flex justify-content-between p-2 col-md-6'>
            <form onSubmit={ createUser }>
                {/* {
                    hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit a form.</h3>
                } */}
                <div className='form-group'>
                    <label><strong>First Name:</strong></label>
                    <input className='form-control' type="text" value={ firstName } onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p className="alert alert-danger mt-2">{ firstNameError }</p> :
                        ''
                    }
                </div>
                <div className='form-group'>
                    <label><strong>Last Name:</strong></label>
                    <input className='form-control' type="text" value={ lastName } onChange={ handleLastName } />
                    {
                        lastNameError ? 
                        <p className="alert alert-danger mt-2">{ lastNameError }</p> :
                        ''
                    }
                </div>
                <div className='form-group'>
                    <label><strong>Email Address:</strong></label>
                    <input className='form-control' type="text" value={ email } onChange={ handleEmail } />
                    {
                        emailError ?
                        <p className="alert alert-danger mt-2">{ emailError }</p> :
                        ''
                    }
                </div>
                <div className='form-group'>
                    <label><strong>Password:</strong></label>
                    <input className='form-control' type="text" value={ password } onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p className="alert alert-danger mt-2">{ passwordError }</p> :
                        ''
                    }
                </div>
                <div className='form-group'>
                    <label><strong>Confirm Password:</strong></label>
                    <input className='form-control' type="text" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value) } 
                    />
                    { confirmPassword !== password ? <p className="alert alert-danger mt-2">Passwords must match</p> : '' }
                </div>
                {/* <input className='btn btn-info' type="submit" value="Create User" /> */}
            </form>
            <div className="form_data mt-4">
                <h3>Your Form Data</h3>
                <p><strong>First Name:</strong> { firstName }</p>
                <p><strong>Last Name:</strong> { lastName }</p>
                <p><strong>Email Address:</strong> { email }</p>
                <p><strong>Password:</strong> { password }</p>
                <p><strong>Confirm Password:</strong> { confirmPassword }</p>
            </div>
        </div>
    );
};

export default UserForm;