import React from 'react'
import Navbar_new from '../components/Navbar_new';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer"

export const Home = () => {
    return <main>
    {/* <Woods />  */}
    {/* <Navbar /> */}
    <Navbar_new />
    {/* <Sidebar /> */}

    {/* <Hero /> */}
    <Outlet/>
    {/* <Woods1 /> */}
    <Footer />
    </main>;
  };

