import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../../components/common/Button.jsx'
import Input from '../../components/common/Input.jsx'
//Hero Cards
import HeroCard1 from '../../assets/icons/hero/Hero_Illustration_Card-1.svg'
import HeroCard2 from '../../assets/icons/hero/Hero_Illustration_Card-2.svg'
import HeroCard3 from '../../assets/icons/hero/Hero_Illustration_Card-3.svg'
import HeroCard4 from '../../assets/icons/hero/Hero_Illustration_Card-4.svg'
//Hero Shapes
import ShapeBlue from '../../assets/icons/hero/Hero_Shapes_1.svg'
import ShapeYellow from '../../assets/icons/hero/Hero_Shapes_2.svg'
import ShapeGray from '../../assets/icons/hero/Hero_Shapes_3.svg'
//Logo
import CartoonNetwork from '../../assets/icons/logos/Cartoon_Network_logo.svg'
import BookingCom from '../../assets/icons/logos/Booking.com_logo.svg'
import Dropbox from '../../assets/icons/logos/Dropbox_logo.svg'
import Toshiba from '../../assets/icons/logos/Toshiba_logo.svg'
import Slack from '../../assets/icons/logos/Slack_logo.svg'
import Netflix from '../../assets/icons/logos/Netflix_logo.svg'
import Spotify from '../../assets/icons/logos/Spotify_logo.svg'
import CocaCola from '../../assets/icons/logos/CocaCola_logo.svg'
import RedBull from '../../assets/icons/logos/RedBull_logo.svg'
import { signupUser } from '../../services/api.js'

const Hero = () => {
    const heroRef = useRef(null)
    const shapeRefs = useRef([])
    const cardRefs = useRef([])
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            })

            // Circles: blue -> yellow -> gray entering from the right
            tl.from(shapeRefs.current, {
                x: 200,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
            })

            // Cards: fade in and move up slightly, one after another
            tl.from(
                cardRefs.current,
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    stagger: 0.15,
                },
                '-=0.1'
            )
        }, heroRef)

        return () => ctx.revert()
    }, [])

    const setShapeRef = (index) => (el) => {
        shapeRefs.current[index] = el
    }

    const setCardRef = (index) => (el) => {
        cardRefs.current[index] = el
    }

    const handleSubmit = async (e) => {
        e?.preventDefault()

        if (!email) {
            setMessage('Please enter your email')
            return
        }
        const userName = email.split('@')[0]
        setLoading(true)
        setMessage('')

        try {
            await signupUser(userName, email)
            setMessage('Signup successful! Check your email for the coupon code.')
            setEmail('')
        } catch (error) {
            setMessage(error.message || 'Signup failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const logoRefs = useRef([])

    const setLogoRef = (index) => (el) => {
        logoRefs.current[index] = el
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e
        const { left, top, width, height } = currentTarget.getBoundingClientRect()

        // Calculate relative position (-1 to 1)
        const xPos = (clientX - left - width / 2) / (width / 2)
        const yPos = (clientY - top - height / 2) / (height / 2)

        // Move shapes (background) - slower movement
        gsap.to(shapeRefs.current, {
            x: xPos * 20,
            y: yPos * 20,
            duration: 0.5,
            ease: 'power1.out',
            overwrite: 'auto'
        })

        // Move cards (foreground) - slightly faster for depth
        gsap.to(cardRefs.current, {
            x: xPos * 30,
            y: yPos * 30,
            duration: 0.5,
            ease: 'power1.out',
            overwrite: 'auto'
        })
    }

    const handleMouseLeave = () => {
        // Reset positions
        gsap.to([...shapeRefs.current, ...cardRefs.current], {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: 'auto'
        })
    }

    const handleLogosMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e
        const { left, top, width, height } = currentTarget.getBoundingClientRect()

        const xPos = (clientX - left - width / 2) / (width / 2)
        const yPos = (clientY - top - height / 2) / (height / 2)

        gsap.to(logoRefs.current, {
            x: xPos * 15,
            y: yPos * 15,
            duration: 0.5,
            ease: 'power1.out',
            overwrite: 'auto'
        })
    }

    const handleLogosMouseLeave = () => {
        gsap.to(logoRefs.current, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: 'auto'
        })
    }

    return (
        <div className='hero-body' ref={heroRef}>
            <div className='hero-navbar'>
                <h3 className='hero-title'>TaskMan</h3>
                <Button ButtonName="Try free" className="hero-button-nav" onClick={() => { }} />
            </div>

            <div className="hero-main">
                <div className='hero-left' onMouseMove={handleLogosMouseMove} onMouseLeave={handleLogosMouseLeave}>
                    <div className='hero-content'>
                        <h4 className='task-title'>
                            Task Management
                        </h4>
                        <h4 className='task-title'>
                            And Lists Tool
                        </h4>
                        <p className='task-subtitle'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
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
                                type="submit"
                                onClick={handleSubmit}
                                disabled={loading}
                            />
                        </form>
                        {message && (
                            <p style={{
                                marginTop: '10px',
                                color: message.includes('successful') ? 'green' : 'red',
                                fontSize: '14px',
                                textAlign: 'center'
                            }}>
                                {message}
                            </p>
                        )}
                    </div>

                    <div className="hero-logos">
                        <img src={CartoonNetwork} alt="Cartoon Network" ref={setLogoRef(0)} />
                        <img src={BookingCom} alt="Booking.com" ref={setLogoRef(1)} />
                        <img src={Dropbox} alt="Dropbox" ref={setLogoRef(2)} />

                        <img src={Toshiba} alt="Toshiba" ref={setLogoRef(3)} />
                        <img src={Slack} alt="Slack" ref={setLogoRef(4)} />
                        <img src={Netflix} alt="Netflix" ref={setLogoRef(5)} />

                        <img src={Spotify} alt="Spotify" ref={setLogoRef(6)} />
                        <img src={CocaCola} alt="Coca Cola" ref={setLogoRef(7)} />
                        <img src={RedBull} alt="Red Bull" className="logo-redbull" ref={setLogoRef(8)} />
                    </div>
                </div>

                <div className="hero-right" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <div className="hero-shapes">
                        <img
                            src={ShapeBlue}
                            alt="Blue circle"
                            className="hero-shape hero-shape--blue"
                            ref={setShapeRef(0)}
                        />
                        <img
                            src={ShapeYellow}
                            alt="Yellow circle"
                            className="hero-shape hero-shape--yellow"
                            ref={setShapeRef(1)}
                        />
                        <img
                            src={ShapeGray}
                            alt="Gray circle"
                            className="hero-shape hero-shape--gray"
                            ref={setShapeRef(2)}
                        />
                    </div>

                    <div className="hero-cards">
                        <img
                            src={HeroCard1}
                            alt="Dashboard card 1"
                            className="hero-card hero-card--1"
                            ref={setCardRef(0)}
                        />
                        <img
                            src={HeroCard2}
                            alt="Dashboard card 2"
                            className="hero-card hero-card--2"
                            ref={setCardRef(1)}
                        />
                        <img
                            src={HeroCard3}
                            alt="Dashboard card 3"
                            className="hero-card hero-card--3"
                            ref={setCardRef(2)}
                        />
                        <img
                            src={HeroCard4}
                            alt="Dashboard card 4"
                            className="hero-card hero-card--4"
                            ref={setCardRef(3)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero