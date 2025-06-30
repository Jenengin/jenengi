// pages/index.js
import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import WhySection from '../components/sections/WhySection'
import Testimonials from '../components/sections/Testimonials'
import NameGenerator from '../components/sections/NameGenerator'

export default function Home() {
  return (
    <div>
      <Head>
        
        <title>Jenengi</title>
        <meta name="description" content="Generator nama untuk proyek, perusahaan, merek, dan banyak lagi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
      
      <main>
        <Hero />
        <Features />
        <WhySection />
        <Testimonials />
        <NameGenerator />
      </main>

      <Footer />
    </div>
  )
}