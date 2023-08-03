import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Woods1 } from "../components/Woods1"
import { Collections } from "../components/Collections"
import { Partners } from "../components/Partners"
import { Testimonials } from "../components/Testimonials"
import Footer from "../components/Footer"

export const Landing = () => {
    return <div>
    <Hero />
    <Woods1 />
    <Collections />
    <Partners />
    <Testimonials />
    <Footer />
    </div>;
  };