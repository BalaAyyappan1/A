import React from 'react'
import SectionHeader from '../components/ReUsable/SectionHeader'
import ServiceFrame from '../components/ReUsable/ServiceFrame'
import KandamList from '../components/Kandam/KandamList'

const Kandam = () => {
  return (
    <div>
       <div className="md:h-[80px] h-[40px]"></div>
      <SectionHeader title="Our Services" />
      <ServiceFrame />
      <SectionHeader title="Kandams/Chapter List" />
      <KandamList />

    </div>
  )
}

export default Kandam