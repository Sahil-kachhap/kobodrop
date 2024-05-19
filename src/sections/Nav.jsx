import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import {XMarkIcon, Bars3Icon} from "@heroicons/react/16/solid"
import Logo from "../assets/logos/kobodrop_logo.svg";

function Nav() {
  return (
    <Disclosure>
      {({open}) => (
         <>
          <div className='flex h-[15vh] items-center max-w-7xl justify-between px-8'>
          <div className="flex">
          <a href="id"><img src={Logo} alt="logo"/></a>
            <div className='hidden sm:flex space-x-4 items-center ml-4'>
              <a href="feature" className="text-gray-500 hover:text-gray-900 active:text-gray-400">Features</a>
              <a href="partner" className="text-gray-500 hover:text-gray-900 active:text-gray-400">Partners</a>
              <a href="review" className="text-gray-500 hover:text-gray-900 active:text-gray-400">Reviews</a>
            </div>
          </div> 
          <a href="https://www.google.com" target="_blank" rel="noreferrer" className="hidden sm:flex bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600">Install Kobodrop</a>
          <DisclosureButton className="sm:hidden text-gray-500 rounded-md p-2 hover:bg-gray-700 hover:text-white">
            {open ? (
              <XMarkIcon className="block h-6 w-6"/>
            ): (<Bars3Icon className="block h-6 w-6"/>) }
          </DisclosureButton>
          </div>
          <DisclosurePanel className="space-y-1">
            <DisclosureButton className='block' as="a" href="#features">
              Features
            </DisclosureButton>
            <DisclosureButton className='block' as="a" href="#partners">
              Partners
            </DisclosureButton>
            <DisclosureButton className='block' as="a" href="#reviews">
              Reviews
            </DisclosureButton>
          </DisclosurePanel>
         </>
      )}
    </Disclosure>  )
}

export default Nav