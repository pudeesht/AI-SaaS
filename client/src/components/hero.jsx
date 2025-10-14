import React from 'react'

const Hero = () => {
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
        
        <div className='text-center mb-3 -mt-20'>

            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>
                Cool AI features <br/><span className='text-primary'>all at one place! </span>
            </h1>

            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>
                Some random quote comes here!
            </p>

        </div>


    </div>
  )
}

export default Hero