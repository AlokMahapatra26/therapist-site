import React from 'react'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats'
import { ScheduleConsultationSection } from '@/components/schedule-section'
import { AboutSection } from '@/components/about-section'
import { TestimonialsSection } from '@/components/testimonials'
import { FAQSection } from '@/components/faq-section'
import { ServicesSection } from '@/components/services'
import { Footer } from '@/components/footer'
import { ContactSection } from '@/components/contact-section'

const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <StatsSection/>
      <ServicesSection/>
      <ScheduleConsultationSection/>
      <AboutSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page