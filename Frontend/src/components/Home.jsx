import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './Footer'
import UseGetAllJObs from '@/hooks/UseGetAllJObs'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  UseGetAllJObs()
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate()
  useEffect(()=>{
    if(user?.role == 'recruiter'){
      navigate("/admin/companies")
    }
  },[]);
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJob/>
      <Footer/>
    </div>
  )
}

export default Home