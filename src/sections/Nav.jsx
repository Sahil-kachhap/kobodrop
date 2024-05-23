import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import {XMarkIcon, Bars3Icon} from "@heroicons/react/16/solid"
import Logo from "../assets/logos/kobodrop_logo.svg";
import ButtonLinks from "../common/ButtonLinks";

function Nav() {
  return (
    <Disclosure>
      {({open}) => (
         <>
          <div className='flex h-[15vh] items-center max-w-7xl justify-between px-8 xl:m-auto lg:px-12'>
          <div className="flex">
          <ButtonLinks href="id"><img src={Logo} alt="logo" /></ButtonLinks>
            <div className='hidden sm:flex space-x-4 items-center ml-4 sm:ml-6 lg:ml-8 lg:space-x-8'>
              <ButtonLinks href={"#features"} className="text-gray-500 hover:text-gray-900 active:text-gray-400" children={"Features"}/>
              <ButtonLinks href={"#partners"} className="text-gray-500 hover:text-gray-900 active:text-gray-400" children={"Partners"}/>
              <ButtonLinks href={"#reviews"} className="text-gray-500 hover:text-gray-900 active:text-gray-400" children={"Reviews"}/>
            </div>
          </div> 
          <ButtonLinks href="https://www.google.com" target="_blank" className="hidden sm:flex bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600" children={"Install Kobodrop"} />
          
          <DisclosureButton className="sm:hidden text-gray-500 rounded-md p-2 hover:bg-gray-700 hover:text-white">
            {open ? (
              <XMarkIcon className="block h-6 w-6"/>
            ): (<Bars3Icon className="block h-6 w-6"/>) }
          </DisclosureButton>
          </div>
          <DisclosurePanel className="space-y-1 px-4 sm:hidden">
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