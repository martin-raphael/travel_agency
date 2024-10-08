import React from 'react'

const CampSite = () =>{
  return <div>Camp Site1</div>
}

const Camp = () => {
  return (
    <section className='border-2 border-green-500 2xl:max-container 
    relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start
      justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
        backgroundImage ="bg-bg-img-1" 
        title="Luxury Camp site"
        subtitle="Nyeri, Kenya"
        peopleJoined="300+ joined"
               />
        <CampSite/>
      </div>

    </section>
  )
}

export default Camp