import React from 'react'
import Button from './Button'

const GetApp = () => {
  return (
    <section className='border-2 border-red-500 flexCenter flex-col pb-[100px] w-full'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 flex-col justify-center items-start gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px] capitalize'> get for free now!</h2>
          <p className='regular-16 text-gray-10'>Available on iOS and Android.</p>

          <div>
            <Button 
            type = "button"
            title='App Store'
            icon='/apple.svg'
            variant='btn_white'
            full/>
            <Button 
            type = "button"
            title='Play Store'
            icon='/android.svg'
            variant='btn_dark_green_outline'
            full/>
          </div>

        </div>

      </div>

    </section>
  )
}

export default GetApp