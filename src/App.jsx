import React, { useState } from 'react'
import Footer from "./components/Footer/Footer";
import './App.css'
import ContactForm from './components/Contact/ContactForm';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

export default function App() {

  return (
    <div className="container-fluid">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}


