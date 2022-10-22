import React from 'react'
import SlackLogo from '../assets/slack-logo.svg';
import Button from './ui-controls/Button';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'

const navLinks = [
  'Product',
  'Solutions',
  'Enterprise',
  'Resources',
  'Pricing'
];

const extraLinks = [{
    text: 'Sign in',
    type: 'link',
    classes: 'mx-8'
  }, {
    text: 'TALK TO SALES',
    type: 'button',
    theme: 'dark',
    classes: 'hidden xl:block'
  }, {
    text: 'GET 50% OFF',
    type: 'button',
    theme: 'light',
    classes: 'hidden lg:block'
  }
]

function Header() {
  return (
    <div className='flex items-center justify-between bg-fuchsia-900 px-11 h-20'>
      <div className='flex'>
        <img src={SlackLogo} className='h-6 w-28' alt='Slack logo'/>
        <div className='pl-6 hidden lg:block'>
          <ul className='flex text-white font-semibold'>
          {
            navLinks.map((navLink) => 
              <li key={navLink} className='text-s px-4'>{navLink}</li>
            )
          }
        </ul>
        </div>
      </div>
      <div className='flex justify-around items-center'>
        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
        <ul className='flex items-center text-white font-semibold'>
          {
            extraLinks.map((extraLink, index) => {
              if (extraLink.type === 'link') {
                return <li key={index} className={extraLink.classes}>{extraLink.text}</li>
              } else if (extraLink.type === 'button') {
                return <li key={index}><Button classes={extraLink.classes} theme={extraLink.theme}>{extraLink.text}</Button></li>
              } else {
                return null;
              }
            })
          }
        </ul>
        <Bars3Icon className='h-6 w-6 text-white block lg:hidden'/>
      </div>
    </div>
  )
}

export default Header


