import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Woods1 } from "../components/Woods1"
import { Collections } from "../components/Collections"
import { Partners } from "../components/Partners"
import Partners_new from "../components/Partners_new"
import { Testimonials } from "../components/Testimonials"
import SlickCarousel from "../components/SlickCarousel"
import Footer from "../components/Footer"


export const Landing = () => {
    return <div>
    <Hero />
    <Woods1 />
    <Collections />
    {/* <Partners /> */}
    <Partners_new />
    {/* <Testimonials /> */}
    <SlickCarousel />
    <Footer />
    </div>;
  };