import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import './login.scss'
import { useEffect, useState, useRef } from 'react'

type loginDataType = {
    email: string,
    password: string 
}

function Login() {
    const emailRef = useRef<HTMLInputElement>(null!)
    const [loginData, setLoginData] = useState<loginDataType>({
        email: '',
        password: ''
    })
    const [empty, setEmpty] = useState<loginDataType>({
        email: '',
        password: ''
    })

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(!loginData.email) {
            setEmpty(prev => ({...prev,email: 'email'}))
        } else {
            setEmpty(prev => ({...prev,email: ''}))
        }
        if(!loginData.password) {
            setEmpty(prev => ({...prev,password: 'password'}))
        } else {
            setEmpty(prev => ({...prev,password: ''}))
        }
    }

    return (
        <main className='login-container'>
            <img src={logo} alt='logo' />
            <form className='login-form'>
                <h1>Login</h1>
                <div className="input-container">
                    <input
                        placeholder='Email address'
                        type='email'
                        className={empty.email === 'email' ? 'empty' : ''}
                        name='email'
                        value={loginData.email}
                        onChange={handleChange}
                        ref={emailRef}
                    />
                    {empty.email === 'email' && <span>Can't be empty</span>}
                </div>

                <div className="input-container">
                    <input
                        placeholder='Password'
                        type='password'
                        className={empty.password === 'password' ? 'empty' : ''}
                        required
                        name='password'
                        value={loginData.password}
                        onChange={handleChange}
                    />
                    {empty.password === 'password' && <span>Can't be empty</span>}
                </div>
                <button onClick={handleSubmit}>Login to your account</button>
                <span>Dont' have an account? <Link to='/signup'>Sign Up</Link> </span>
            </form>
        </main>
    )
}

export default Login