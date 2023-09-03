import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import './signup.scss'
import { useState, useEffect, useRef } from 'react'

type SignupDataType = {
    email: string,
    password: string,
    repeatPassword: string
}

function Signup() {
    const emailRef = useRef<HTMLInputElement>(null!)
    const [signupData, setSignupData] = useState<SignupDataType>({
        email: '',
        password: '',
        repeatPassword: ''
    })
    const [empty, setEmpty] = useState<SignupDataType>({
        email: '',
        password: '',
        repeatPassword: ''
    })


    useEffect(() => {
        emailRef.current.focus()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(!signupData.email) {
            setEmpty(prev => ({...prev,email: 'email'}))
        } else {
            setEmpty(prev => ({...prev,email: ''}))
        }
        if(!signupData.password) {
            setEmpty(prev => ({...prev,password: 'password'}))
        } else {
            setEmpty(prev => ({...prev,password: ''}))
        }
        if(!signupData.repeatPassword) {
            setEmpty(prev => ({...prev,repeatPassword: 'repeatPassword'}))
        } else {
            setEmpty(prev => ({...prev,repeatPassword: ''}))
        }
    }
    return (
        <main className='signup-container'>
            <img src={logo} alt='logo' />
            <form className='signup-form'>
                <h1>Sign Up</h1>
                <div className="input-container">
                    <input placeholder='Email address'
                        type='email'
                        className={empty.email === 'email' ? 'empty' : ''}
                        required
                        value={signupData.email}
                        onChange={handleChange}
                        name='email'
                        ref={emailRef}
                    />
                </div>
                <div className="input-container">
                    <input placeholder='Password'
                        type='password'
                        className={empty.password === 'password' ? 'empty' : ''}
                        required
                        value={signupData.password}
                        onChange={handleChange}
                        name='password'
                    />
                </div>
                <div className="input-container">
                    <input placeholder='Repeat Password'
                        type='password'
                        className={empty.repeatPassword === 'repeatPassword' ? 'empty' : ''}
                        required
                        value={signupData.repeatPassword}
                        onChange={handleChange}
                        name='repeatPassword'
                    />
                </div>
                <button onClick={handleSubmit}>Create an account</button>
                <span>Already have an account? <Link to='/login'>Login</Link> </span>
            </form>
        </main>
    )
}

export default Signup