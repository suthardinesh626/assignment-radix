import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Why.css'
//assets
import RankProject from '../../assets/icons/why/Why_Illustration-1.svg'
import TopEarners from '../../assets/icons/why/Why_Illustration-2.svg'
import Arrow from '../../assets/icons/why/Arrow_icon.svg'
//Shapes
import Ellipse from '../../assets/icons/why/Why_Shapes_Ellipse.svg'
import Rectangle from '../../assets/icons/why/Why_Shapes_Rectangle.svg'


const Why = () => {
    const containerRef = useRef(null);
    const shapeRefs = useRef([]);
    const cardRefs = useRef([]);
    const textRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                }
            });

            // Shapes animation: Slide in from left
            tl.from(shapeRefs.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            });

            // Cards: Fade in and slide up (synced with shapes slightly overlapped)
            tl.from(cardRefs.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            }, '-=0.6'); // Overlap with shapes animation

            // Text section: Fade up
            tl.from(textRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            }, '-=0.6');

            // Arrow: Slide out from left (reveal effect)
            tl.from(arrowRef.current, {
                x: -20,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.out',
            }, '-=0.4');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToShapeRefs = (el) => {
        if (el && !shapeRefs.current.includes(el)) shapeRefs.current.push(el);
    };

    const addToCardRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
    };

    return (
        <div className='why-container' ref={containerRef}>
            <div className='why-left'>
                <div className='why-shapes'>
                    <img src={Ellipse} alt="" className='why-shape why-shape-ellipse' ref={addToShapeRefs} />
                    <img src={Rectangle} alt="" className='why-shape why-shape-rectangle' ref={addToShapeRefs} />
                </div>
                <div className='why-cards'>
                    <img src={RankProject} alt="Rank Project" className='why-card why-card-rank' ref={addToCardRefs} />
                    <img src={TopEarners} alt="Top Earners" className='why-card why-card-earners' ref={addToCardRefs} />
                </div>
            </div>

            <div className='why-right'>
                <div className='why-content' ref={textRef}>
                    <h3 className='why-title'>Why do you need task management software?</h3>
                    <p className='why-description'>
                        Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.
                    </p>
                    <div className='why-link-wrapper'>
                        <span className='why-link'>LEARN MORE</span>
                        <img src={Arrow} alt="Arrow" className='why-arrow' ref={arrowRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why