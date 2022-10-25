import React from 'react'
import Button from './ui-controls/Button'

function Slogan() {
  return (
    <div className='flex flex-col bg-fuchsia-900 pl-11 pb-10 md:flex-row md:overflow-clip'>
      <div className='w-[650px] min-w-[650px]'>
        <div className='pt-12'>
          <h1 className='text-white text-6xl font-bold'>
            Great teamwork starts with a <span className='text-amber-400'>digital HQ</span>
          </h1>
          <h4 className='text-white text-lg font-semibold pr-6 pt-3'>
            With all your people, tools and communication in one place,
            you can work faster and more flexibly than ever before.
          </h4>
        </div>
        <div className='flex items-start pt-10 flex-col lg:flex-row'>
          <Button size='large' classes='w-full lg:w-auto'>GET 50% OFF</Button>
          <Button size='large' theme='google' classes='mt-2 mt w-full lg:w-auto lg:mt-0'>SIGN UP WITH GOOGLE</Button>
        </div>
        <div className='hidden lg:block'>
          <h4 className='text-white text-lg font-semibold pr-6 pt-3'>
            <span className=' font-bold'>Slack is free to try</span> for as long as you like
          </h4>
        </div>
      </div>
      <div className='w-[20px] min-w-[20px]'>
      </div>
      <div className='w-[650px] min-w-[650px] flex items-center justify-center pt-6 overflow-hidden'>
        <video className='h-[400px] min-h-[400px]'
          title="Team discussing work in the Slack app"
          role="img"
          data-js-id="hero"
          loop={1}
          muted={1}
          autoPlay={1}
          playsInline={1}
          poster="https://a.slack-edge.com/2951054/marketing/img/homepage/e2e-prospects/animations/static/hero-product-ui.en-GB.jpg"
        >
          <source 
            src="https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.en-GB.webm"
            type="video/webm"
          />
          <source
            src="https://a.slack-edge.com/8ce325c/marketing/img/homepage/e2e-prospects/animations/mp4/hero-product-ui.en-GB.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  )
}

export default Slogan
