import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import ProjectPage from './Pages/ProjectPage'
import ContactUsPage from './Pages/ContactUsPage'
import ExperiencePage from './Pages/ExperiencePage'
import EducationPage from './Pages/EducationPage'
import ErrorPage from './Pages/ErrorPage'
import FaqPage from './Pages/FaqPage'
import TestimonialPage from './Pages/TestimonialPage'
import SkillPage from './Pages/SkillPage'
import HireSectionPage from './Pages/HireSectionPage'

import ScrollToTop from './Components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/skills' element={<SkillPage />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/hire' element={<HireSectionPage />} />


        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
