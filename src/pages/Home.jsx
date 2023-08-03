import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Woods1 } from "../components/Woods1"
import { Outlet } from 'react-router-dom'

export const Home = () => {
    return <main>
    {/* <Woods />  */}
    <Navbar />
    {/* <Hero /> */}
    <Outlet/>
    {/* <Woods1 /> */}
    </main>;
  };

