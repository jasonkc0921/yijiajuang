import React from 'react'
import Hero_new from '../components/Hero_new';
import { Collections } from "../components/Collections"
import Partners_new from "../components/Partners_new"
import { Integration } from "../components/Integration"
import { Themes } from "../components/Themes"
import SlickCarousel from "../components/SlickCarousel"
import { Woods } from "../components/Woods"
import { Harmony } from "../components/Harmony"
import { Soothing } from "../components/Soothing"
import Footer from "../components/Footer"


export const Landing = () => {
    return <div>
    <Hero_new />
    {/* <Woods1 /> */}

    {/* <Partners_new /> */}
    <Integration />
    <Themes />
    <Woods />
    <Harmony />
    <Partners_new />
    <Soothing />
    <Collections />
    {/* <SlickCarousel /> */}
    </div>;
  };