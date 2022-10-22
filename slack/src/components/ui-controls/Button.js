import React from 'react'
import GoogleLogo from '../../assets/google-logo.svg';

function Button(props) {
  const { children, theme, classes, size } = props;
  return (
    <button className={`
        border border-opacity-80 lg:mr-2
        
        ${!size ? 'p-2' : ''}
        ${size === 'large' && theme !== 'google' ? 'p-4' : ''}
        ${size === 'large' && theme === 'google' ? 'p-1 pr-4' : ''}

        ${!theme ? 'bg-white text-fuchsia-900' : ''}
        ${theme && theme === 'dark' ? 'bg-fuchsia-900 text-white' : ''}
        ${theme && theme === 'google' ? 'bg-blue-500 text-white border-blue-500' : ''}

        ${classes} 
        border-white text-s rounded hover:border-opacity-100`}
        type="button">
      { theme === 'google' && (
        <div className='flex items-center justify-items-stretch'>
          <div className='h-12 w-12'>
            <div className='bg-white h-12 w-12 flex items-center justify-center'>
              <img className='h-6 w-6' src={GoogleLogo} alt='Google'/>
            </div>
          </div>
          <div className='pl-3 w-full flex items-center justify-center'>
            { children }
          </div>
        </div>
      )}
      { theme !== 'google' && (
        <div>
          { children }
        </div>
      )}
    </button>
  )
}

export default Button