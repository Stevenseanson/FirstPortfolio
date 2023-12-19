import "./index.css";
import {Link} from 'react-router-dom';

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, EnvelopeIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="fixed top-0 w-full bg-color-olive z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/#home">
                  <h1 className="font-bold text-color-cornsilk ml-2 lg:ml-16 text-4xl" >Sean.dev</h1>
                  </Link>
                </div>
                <div className=" flex items-center md:hidden">
                 
                 
                  <Link to="/contact" className="relative inline-flex items-center justify-center rounded-md ml-48 p-2 text-color-meringue hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-color-laurel">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Contact</span>
                 
                      <EnvelopeIcon className="block h-6 w-6" aria-hidden="true" />
                      </Link>
                    
                  
                </div>
               
              </div>
              <div className="hidden md:ml-6 mr-16 md:flex md:space-x-8">
                  <Link
                    to="/portfolio/#home"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-color-cornsilk hover:text-white hover:border-b-white"
                  >
                    Home
                  </Link>
                  <Link
                 
                    to="/portfolio/#about"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-color-cornsilk hover:text-white hover:border-b-white"
                  >
                  About
                  </Link>
                 
                  <Link
                    to="/portfolio/#projects"
                    
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-color-cornsilk hover:text-white hover:border-b-white"
                  >
                    Projects
                  </Link>
                  <Link
                  exact="true"
                    to="/contact"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-color-cornsilk hover:text-white hover:border-b-white"
                  >
                    Contact
                  </Link>
                  
                </div>
              
            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}




export default Navbar