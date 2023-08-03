import React from 'react'
import { Integration } from "../components/Integration"
import { Woods1 } from "../components/Woods1"
import IrregularGrid from "../components/IrregularGrid"
import Navbar from '../components/Navbar';
import { Integration_hero } from '../components/integration_hero';
import Footer from "../components/Footer"

export const Modern_integration = () => {
    return <div>
    <Integration_hero />
    <Integration />
    <IrregularGrid />
    <Footer />
    </div>;
  };

