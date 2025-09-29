import { useEffect } from 'react'
import Hero from '../components/Home/Hero'
import Service from '../components/Home/Service'
import Why from '../components/Home/Why'
import Tradition from '../components/Home/Tradition'
import Visitors from '../components/Home/Visitors'
import People from '../components/Home/People'
import Blogs from '../components/Home/Blogs'
import Message from '../components/Home/Message'

const Home = ({ scrollTo }) => {
  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [scrollTo])

  return (
    <div>
      <Hero />
      <Service />
      <Why />
      <Tradition />
      <Visitors />
      <People id="testimonial" />  
      <Blogs id="blog" />          
      <Message />
    </div>
  )
}

export default Home
