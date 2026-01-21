import React from 'react'
import './Hero.css'
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

const Hero = () => {
    return (
        <div className='hero-body' >
            <div className='hero-navbar'  >
                <h3 className='hero-title' >TaskMan</h3>
                <Button ButtonName="Try free" className="hero-button-nav" onClick={() => { }} />
            </div>
            <div className='hero-content' >
                <h4 className='task-title' >
                    Task Management
                </h4>
                <h4 className='task-title' >
                    And Lists Tool
                </h4>
                <p className='task-subtitle' >
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                </p>
                <div className='email-section' >
                    <Input inputName="Name@company.com" style='hero-input' />
                    <Button ButtonName="Try for free" className="hero-button-body" onClick={() => { }} />
                </div>

            </div>

        </div>
    )
}

export default Hero