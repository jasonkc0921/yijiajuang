import React from 'react'
import { Navbar } from '../components/Navbar';
import Hero from '../components/Hero';
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer"

export const Home = () => {
    return <main>
    {/* <Woods />  */}
    <Navbar />
    {/* <Navbar_new /> */}
    {/* <Sidebar /> */}

    {/* <Hero /> */}
    <Outlet/>
    {/* <Woods1 /> */}
    <Footer />
    </main>;
  };

