import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Benefits.css'
import Track from '../../assets/icons/benefits/Benefits_Icon_Track.svg'
import Priotize from '../../assets/icons/benefits/Benefits_Icon_Priotitize.svg'
import Collaborate from '../../assets/icons/benefits/Benefits_Icon_Collaborate.svg'

const Benefits = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: cardsRef.current[0],
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
        });

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    const benefitsData = [
        {
            icon: Track,
            title: 'Keep tasks in one place',
            subtitle: 'Save time, avoid losing work and information, delegate, and track tasks to stay on schedule'
        },
        {
            icon: Priotize,
            title: 'Prioritize your work',
            subtitle: 'Tracking tasks allows everyone to understand which are more important or require more time, so'
        },
        {
            icon: Collaborate,
            title: 'Improve collaboration',
            subtitle: 'Tracking tasks allows everyone to understand which are more important or require more time, so'
        }
    ];

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const xPos = (clientX - left - width / 2) / (width / 2);
        const yPos = (clientY - top - height / 2) / (height / 2);

        gsap.to(cardsRef.current, {
            x: xPos * 20,
            y: yPos * 20,
            duration: 0.5,
            ease: 'power1.out',
            overwrite: 'auto'
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardsRef.current, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: 'auto'
        });
    };

    return (
        <div className='benefits-container' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className='benefits-title'>
                <h3 className='benefits-title-text' >Key benefits of using task management software</h3>
            </div>
            <div className='benefits-cards'>
                {benefitsData.map((data, index) => (
                    <div className='benefits-card' key={index} ref={addToRefs}>
                        <div className='benefits-icon-wrapper'>
                            <img src={data.icon} alt={data.title} className='benefits-icon' />
                        </div>
                        <h4 className='benefits-card-title'>{data.title}</h4>
                        <p className='benefits-card-subtitle'>{data.subtitle}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Benefits