import { useState } from 'react'

function SignUp() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        firstName:'',
        lastName:''
    })
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }
    const { email, password, firstName, lastName } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className='grey-text text-darken-3'>Sign Up</h5>
                <div className='input-field'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={handleChange} value={email} />
                </div>
                <div className='input-field'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstName" value={firstName} onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={lastName} onChange={handleChange} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0' type='submit'> Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp