import { Dialog, Disclosure, Popover, PopoverGroup, Transition, PopoverButton, PopoverPanel, DialogPanel } from '@headlessui/react'
import { Fragment, useState } from 'react'
import * as Icon from 'react-icons/fa'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="/profile" className="text-sm font-semibold leading-6 text-gray-900">
            Profile
          </a>
          <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/sign-in" className="text-sm font-semibold leading-6 text-gray-900">
            Sign In <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Header