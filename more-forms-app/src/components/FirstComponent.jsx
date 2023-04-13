import React, { useState } from 'react'

function UserForm() {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = (e) => {};
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }
    return (
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label><strong>First Name:</strong></label>
                    <input 
                        type="text" 
                        value={ firstName } 
                        onChange={ (e) => setFirstName(e.target.value) } 
                    />
                </div>
                <div>
                    <label><strong>Last Name:</strong></label>
                    <input 
                        type="text" 
                        value={ lastName } 
                        onChange={ (e) => setLastName(e.target.value) } 
                    />
                </div>
                <div>
                    <label><strong>Email Address:</strong></label>
                    <input 
                        type="text" 
                        value={ email } 
                        onChange={ (e) => setEmail(e.target.value) } 
                    />
                </div>
                <div>
                    <label><strong>Password:</strong></label>
                    <input 
                        type="text" 
                        value={ password } 
                        onChange={ (e) => setPassword(e.target.value) } 
                    />
                </div>
                <div>
                    <label><strong>Confirm Password:</strong></label>
                    <input 
                        type="text" 
                        value={ confirmPassword } 
                        onChange={ (e) => setConfirmPassword(e.target.value) } 
                    />
                </div>
                {/* <input type="submit" value="Create User" /> */}
            </form>
        </>
    )
}

export default UserForm