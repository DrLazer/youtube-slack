import React from 'react'
import SlackLogo from '../assets/slack-logo.svg';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <div className='flex justify-between bg-fuchsia-900 p-6'>
      <img src={SlackLogo} alt='Slack logo'/>
      <div className='flex w-20 justify-between'>
        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
        <Bars3Icon className="h-6 w-6 text-white"/>
      </div>
    </div>
  )
}

export default Header


