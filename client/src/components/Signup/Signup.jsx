import React, { useRef, useEffect, useState } from 'react'
import Input from '../../components/common/Input.jsx'
import Button from '../../components/common/Button.jsx'
import './Signup.css'
import Triangle from '../../assets/icons/signup/Signup_Shape.svg'
import { signupUser } from '../../services/api.js'

const Signup = () => {
    const signupRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            {
                threshold: 0.3
            }
        )

        if (signupRef.current) {
            observer.observe(signupRef.current)
        }

        return () => {
            if (signupRef.current) {
                observer.unobserve(signupRef.current)
            }
        }
    }, [])

    const handleSubmit = async (e) => {
        e?.preventDefault()
        
        if (!email) {
            setMessage('Please enter your email')
            return
        }

        // Extract name from email if not provided
        const userName = name || email.split('@')[0]

        setLoading(true)
        setMessage('')

        try {
            await signupUser(userName, email)
            setMessage('Signup successful! Check your email for the coupon code.')
            setEmail('')
            setName('')
        } catch (error) {
            setMessage(error.message || 'Signup failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div ref={signupRef} className="signup-section">
            <div className='signup-body'>
                <h3 className='signup-title' >
                    Get better work done
                </h3>
                <p className='signup-subtitle' >
                    See why millions of people across 195 countries use TaskMan.
                </p>

                <form className='email-section' onSubmit={handleSubmit}>
                    <Input 
                        inputName="Name@company.com" 
                        style='hero-input'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button 
                        ButtonName={loading ? "Signing up..." : "Try for free"} 
                        className="hero-button-body" 
                        onClick={handleSubmit}
                        type="submit"
                        disabled={loading}
                    />
                </form>
                {message && (
                    <p style={{ 
                        marginTop: '10px', 
                        color: message.includes('successful') ? 'green' : 'red',
                        fontSize: '14px'
                    }}>
                        {message}
                    </p>
                )}
            </div>
            <div className="triangle-container">
                <img
                    src={Triangle}
                    alt="Triangle"
                    className={`triangle-svg ${isVisible ? 'visible' : ''}`}
                />
            </div>
        </div>
    )
}

export default Signup