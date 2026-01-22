import React, { useRef, useEffect, useState } from 'react'
import Input from '../../components/common/Input.jsx'
import Button from '../../components/common/Button.jsx'
import './Signup.css'
import Triangle from '../../assets/icons/signup/Signup_Shape.svg'

const Signup = () => {
    const signupRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

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

    return (
        <div ref={signupRef} className="signup-section">
            <div className='signup-body'>
                <h3 className='signup-title' >
                    Get better work done
                </h3>
                <p className='signup-subtitle' >
                    See why millions of people across 195 countries use TaskMan.
                </p>

                <div className='email-section'>
                    <Input inputName="Name@company.com" style='hero-input' />
                    <Button ButtonName="Try for free" className="hero-button-body" onClick={() => { }} />
                </div>
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